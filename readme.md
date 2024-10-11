  Tailwind Mask Image body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; } h1, h2, h3 { color: #333; } code { background: #f4f4f4; padding: 2px 4px; border-radius: 4px; } pre { background: #f4f4f4; padding: 10px; border-radius: 4px; overflow-x: auto; }

Tailwind Mask Image
===================

A Tailwind CSS plugin that generates dynamic `mask-image` utilities based on `backgroundImage`. This plugin allows you to easily create and manage mask images within your Tailwind CSS projects.

Table of Contents
-----------------

*   [Installation](#installation)
*   [Usage](#usage)
*   [Available Utilities](#available-utilities)
*   [Configuration](#configuration)
*   [License](#license)
*   [Contributing](#contributing)
*   [Contact](#contact)

Installation
------------

To install the plugin, run the following command in your project directory:

    npm install tailwind-mask-image --save-dev

After installing, you need to include the plugin in your `tailwind.config.js` file:

    // tailwind.config.js
    module.exports = {
      theme: {
        // Your theme configuration
      },
      plugins: [
        require('tailwind-mask-image'),
      ],
    }
    

Usage
-----

Once installed and configured, you can use the dynamic utilities in your CSS files or HTML classes. Here are some examples:

    <div class="mask-[url('/path/to/image.png')]">
      Your content here
    </div>
    
    <div class="mask-linear">
      Your content here with a linear mask
    </div>
    
    <div class="mask-shape-circle">
      Your content here with a circular mask
    </div>
    

Available Utilities
-------------------

### Mask Utilities

*   `mask-{image}`: Set the mask image dynamically based on the configured `backgroundImage`.
*   `mask-linear`: Apply a linear gradient mask.
*   `mask-shape-circle`: Set the mask shape to a circle.
*   `mask-shape-ellipse`: Set the mask shape to an ellipse.
*   `mask-reach-{value}`: Define the mask reach (e.g., `closest-side`, `farthest-corner`).
*   `mask-at-{position}`: Position the mask (e.g., `center`, `top`, `bottom`).

### Additional Utilities

*   Mask Repeat: Control the repeat behavior of the mask with utilities like `mask-repeat`, `mask-repeat-x`, `mask-repeat-y`, etc.
*   Mask Size: Define the size of the mask using `mask-size` utilities.
*   Mask Position: Control the position of the mask with `mask-position`.

Configuration
-------------

You can customize the plugin’s behavior by modifying the values in your `tailwind.config.js` file.

Example configuration:

    module.exports = {
      theme: {
        extend: {
          backgroundImage: theme => ({
            'custom-pattern': "url('/path/to/your/image.png')",
          }),
        },
      },
    }
    

License
-------

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

Contributing
------------

Contributions are welcome! If you have suggestions for improvements or find bugs, feel free to open an issue or submit a pull request.
