# Tldraw Project

A Python toolkit for manipulating and analyzing tldraw documents using Jupyter notebooks. This project provides tools to programmatically interact with tldraw, a collaborative digital whiteboard, through Python.

## Overview

This project demonstrates how to explore, modify, and analyze tldraw documents using Python. Tldraw is a powerful collaborative digital whiteboard available at [tldraw.com](https://tldraw.com), and this toolkit allows you to work with its documents programmatically.

## Features

- **Document Structure Analysis**: Explore the internal structure of tldraw documents
- **Programmatic Modification**: Modify tldraw documents using Python code
- **Document Comparison**: Compare contents between different tldraw documents
- **Layer Management**: Investigate and manipulate graphical object depth/layers
- **Pattern Recognition**: Detect and recognize specific signatures or glyphs in documents

## Repository Structure

```
├── docs/                   # Documentation files
├── images/                 # Image assets and examples
├── 01-introduction.ipynb   # Project overview and introduction
├── 02-getting-started.ipynb # Basic document manipulation
├── 03-changes.ipynb        # Document comparison functionality
├── 04-layers.ipynb         # Layer and depth management
├── 05-glyphs.ipynb         # Signature detection algorithms
├── pixi.toml              # Project dependencies and configuration
├── pixi.lock              # Locked dependency versions
└── README.md              # This file
```

## Getting Started

### Prerequisites

- [Pixi package manager](https://prefix.dev/docs/pixi/overview) installed on your system
- Git for cloning the repository

## Quickstart

 0. [Fork this github repository](https://github.com/boisgera/tldraw-project/fork).

 1. Download its content on your computer.

 2. [Install the pixi package manager](https://pixi.sh/#installation).

 3. Open a terminal in the project root folder and type `pixi run start`.

This will launch Jupyter Lab with all necessary dependencies automatically installed and configured.

## Dependencies

The project uses the following key dependencies:

- **Python 3.12.0**: Core runtime
- **JupyterLab 4.0.9**: Interactive development environment
- **NumPy 1.26.2**: Numerical computing
- **Matplotlib 3.8.2**: Plotting and visualization
- **SciPy 1.11.4**: Scientific computing
- **perfect-freehand 1.2.0**: Freehand drawing utilities
- **jupyterlab-myst 2.1.0**: MyST markdown support

## Usage

The project is organized as a series of interactive Jupyter notebooks:

1. **Introduction (01-introduction.ipynb)**: Start here to understand the project scope and tldraw basics

2. **Getting Started (02-getting-started.ipynb)**: Learn how to load and modify simple tldraw documents

3. **Document Changes (03-changes.ipynb)**: Develop functions to compare and analyze differences between tldraw documents

4. **Layer Management (04-layers.ipynb)**: Explore how tldraw handles graphical object depth and layering

5. **Pattern Recognition (05-glyphs.ipynb)**: Implement algorithms to detect signatures and specific patterns in drawings

### Example Workflow

```python
# Example: Loading and analyzing a tldraw document
import numpy as np
from tldraw_tools import DocumentAnalyzer

# Load a tldraw document
doc = DocumentAnalyzer("path/to/document.tldr")

# Analyze document structure
doc.analyze_structure()

# Compare with another document
changes = doc.compare_with("path/to/other_document.tldr")

# Detect specific patterns
signatures = doc.detect_signatures()
```

## License

This project is licensed under the Creative Commons Attribution 4.0 International License (CC-BY-4.0). See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Originally forked from [boisgera/tldraw-project](https://github.com/boisgera/tldraw-project)
- Created by Sébastien Boisgérault at Mines Paris - PSL University
- Tldraw team for creating the excellent collaborative whiteboard platform
