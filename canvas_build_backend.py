"""PEP 517 build backend wrapper that builds the canvas JS bundle before packaging.

Delegates all build operations to setuptools.build_meta, but runs
``npm install && npm run build`` in the canvas/ directory first so the
static/canvas/ assets are always fresh in the sdist and wheel.

Uses ``npm ci`` for reproducible builds when package-lock.json is present,
falling back to ``npm install`` otherwise.

Graceful fallback:
- If Node.js/npm is not installed, the committed bundle is used as-is.
- If the canvas/ source directory is absent (e.g. building from an sdist),
  the step is skipped entirely.
"""

# Re-export everything from setuptools so PEP 517 frontends see a complete backend
from setuptools.build_meta import *                          # noqa: F401,F403
from setuptools.build_meta import build_sdist as _orig_sdist
from setuptools.build_meta import build_wheel as _orig_wheel

import os
import shutil
import subprocess


def _build_canvas():
    """Run the canvas npm build if Node.js and source are available."""
    canvas_dir = os.path.join(os.path.dirname(__file__), "canvas")

    if not os.path.isdir(canvas_dir):
        return

    if not shutil.which("npm"):
        return

    # Prefer npm ci (reproducible) when lock file exists, else npm install
    lock_file = os.path.join(canvas_dir, "package-lock.json")
    if os.path.isfile(lock_file):
        subprocess.run(["npm", "ci"], cwd=canvas_dir, check=True)
    else:
        subprocess.run(["npm", "install"], cwd=canvas_dir, check=True)

    subprocess.run(["npm", "run", "build"], cwd=canvas_dir, check=True)


def build_sdist(*args, **kwargs):
    _build_canvas()
    return _orig_sdist(*args, **kwargs)


def build_wheel(*args, **kwargs):
    _build_canvas()
    return _orig_wheel(*args, **kwargs)
