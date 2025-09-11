# ADR-002: HTMX + Alpine.js Design Principles

**Status**: Accepted  
**Date**: 2025-01-14  
**Author**: Anders Ohrn

## Context

The Cartolex User App requires dynamic frontend interactions while maintaining server-side rendering simplicity. Initial implementations mixing HTMX and Alpine.js led to:

- **State Management Conflicts**: Both frameworks trying to control the same UI elements
- **Component Boundary Issues**: HTMX-loaded content trying to access parent Alpine components
- **Visibility Problems**: HTMX indicator classes interfering with normal button styling
- **Fragile Communication**: Direct manipulation of Alpine.js internal state (`_x_dataStack`)
- **Unpredictable Behavior**: Complex interactions between dynamically loaded content and client-side state

Traditional approaches led to recursive page loading, broken close buttons, and inconsistent action button behaviors.

## Decision

We adopt a **clear separation of concerns** between HTMX and Alpine.js with the following principles:

### Core Philosophy
**HTMX First, Alpine Second**: Use HTMX as the primary driver for server interactions and HTML updates. Alpine.js fills the gaps where client-side state management and interactivity are needed.

### State Ownership Principle
```
Server State → HTMX
UI State → Alpine.js
```

**Rule**: If the state needs to persist or affects business logic, it belongs to the server (HTMX). If it's purely presentational, it belongs to Alpine.

### When to Use What

#### Use HTMX For:
- **Server communication**: API calls, form submissions, data fetching
- **Content replacement**: Loading configuration panels, updating sections
- **CRUD operations**: Workflow execution, configuration updates
- **Navigation**: Page transitions, URL updates

#### Use Alpine.js For:
- **Local UI state**: Show/hide panels, toggle buttons, loading states
- **Form validation**: Client-side validation before submission
- **Temporary state**: Form data before submission, UI preferences
- **Coordinating HTMX**: Managing states that affect HTMX operations

### Communication Patterns

#### Pattern A: Event Bridge (Recommended)
Use custom events for communication between HTMX-loaded content and Alpine components.

```javascript
// From HTMX content to Alpine
window.dispatchEvent(new CustomEvent('close-workflow-config', { 
    detail: { workflowName: workflowName } 
}));

// Alpine listener
x-data="{ 
    openConfigs: {},
    init() {
        window.addEventListener('close-workflow-config', (event) => {
            this.openConfigs[event.detail.workflowName] = false;
        });
    }
}"
```

#### Pattern B: HTMX Events for Alpine State
Use HTMX's built-in events to trigger Alpine state changes.

```html
<div x-data="{ saving: false }">
    <form @htmx:before-request="saving = true"
          @htmx:after-request="saving = false">
        <button :disabled="saving">
            <span x-text="saving ? 'Saving...' : 'Save'"></span>
        </button>
    </form>
</div>
```

### Component Boundary Rules

1. **No Reaching Across Boundaries**: HTMX-loaded content must not access parent Alpine components directly
2. **Event-Driven Communication**: Use custom events for coordination
3. **Self-Contained Components**: Each Alpine component should be independent
4. **Clear Initialization**: Alpine components reinitialize after HTMX content swaps

### Anti-Patterns to Avoid

#### ❌ Manipulating Alpine Internals
```html
<!-- BAD: Direct manipulation of Alpine internals -->
<button @click="document.querySelector('[x-data]')._x_dataStack[0].openConfigs['workflow'] = false">
```

#### ❌ Using HTMX Indicator Classes on Visible Elements
```html
<!-- BAD: htmx-indicator hides elements by default -->
<button class="btn-primary htmx-indicator">Save</button>

<!-- GOOD: Alpine-managed loading state -->
<button :disabled="saving" class="btn-primary">
    <span x-text="saving ? 'Saving...' : 'Save'"></span>
</button>
```

#### ❌ Competing State Sources
```html
<!-- BAD: Both HTMX and Alpine managing visibility -->
<div x-data="{ open: false }" x-show="open">
    <div hx-get="/panel" hx-swap="outerHTML">
        <!-- Server also controls panel visibility -->
    </div>
</div>
```

## Implementation Examples

### Configuration Panel Pattern
```html
<!-- Parent: Alpine manages visibility state -->
<div x-data="{ 
    openConfigs: {},
    init() {
        window.addEventListener('close-workflow-config', (event) => {
            this.openConfigs[event.detail.workflowName] = false;
        });
    }
}">
    
    <!-- Trigger: Alpine + HTMX coordination -->
    <button @click="if (!openConfigs['workflow']) {
                      htmx.ajax('GET', '/workflow/config', {target: '#config'});
                      openConfigs['workflow'] = true;
                    } else {
                      openConfigs['workflow'] = false;
                    }">
        Configure
    </button>
    
    <!-- Panel: Alpine controls visibility -->
    <div id="config" x-show="openConfigs['workflow']" x-collapse>
        <!-- HTMX loads content here -->
    </div>
</div>

<!-- HTMX-loaded content: Uses events for communication -->
<script>
window.closeWorkflowConfig = function(workflowName) {
    window.dispatchEvent(new CustomEvent('close-workflow-config', { 
        detail: { workflowName: workflowName } 
    }));
};
</script>
```

### Action Button Pattern
```html
<div x-data="{ submitting: false }">
    <form @htmx:before-request="submitting = true"
          @htmx:after-request="submitting = false">
        
        <button type="submit" 
                :disabled="submitting"
                class="btn-primary disabled:opacity-50">
            <svg x-show="submitting" class="animate-spin">...</svg>
            <span x-text="submitting ? 'Saving...' : 'Save Configuration'"></span>
        </button>
    </form>
</div>
```

## Consequences

### Positive
- **Clear Separation**: Each framework handles what it does best
- **Predictable Behavior**: No more competing state management
- **Easier Debugging**: Clear ownership boundaries
- **Better UX**: Consistent loading states and interactions
- **Maintainable**: Easy to understand and extend

### Negative
- **Learning Curve**: Developers need to understand both frameworks
- **Event Coordination**: Requires discipline to use events instead of direct access
- **Initial Complexity**: More setup for simple interactions

### Neutral
- **Code Volume**: More structure but clearer organization
- **Performance**: Minimal impact, both libraries are lightweight

## Compliance Checklist

When implementing new features, verify:

- [ ] HTMX handles all server communication
- [ ] Alpine manages only UI state and client-side interactions  
- [ ] Communication uses events, not direct state access
- [ ] No `htmx-indicator` classes on normally visible elements
- [ ] Alpine components reinitialize after HTMX swaps
- [ ] Clear state ownership (server vs. client)

## Related Decisions

- ADR-001: Configuration Hierarchy Design (establishes server-side config patterns)
- Future ADR: Testing Strategy for HTMX+Alpine Applications

## References

- [HTMX Documentation](https://htmx.org/docs/)
- [Alpine.js Documentation](https://alpinejs.dev/)
- [HTMX + Alpine Integration Guide](https://htmx.org/essays/a-real-world-react-to-htmx-port/)