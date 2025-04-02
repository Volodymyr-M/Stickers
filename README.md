# Storage Box Stickers Generator

A simple HTML-based solution for printing stickers for garage storage boxes.

## Features

- Generates 100mm x 100mm stickers with slightly rounded corners
- Uses Material Icons and Font Awesome icons that are clearly visible from a distance
- Thin, light borders for easy cutting guidance
- Optimized for printing on A4 paper
- Simple interface to select which stickers to print
- Ability to specify quantities for each sticker type
- Toggle between filled and outlined icon styles
- Utility buttons to toggle all checkboxes and reset quantities

## Available Sticker Types

- Tools (handyman)
- Furniture (chair)
- Clothing, Female/Male (shirt with gender icon)
- Shoes, Female/Male (shoe prints with gender icon)
- Gardening (local_florist)
- Electronics (power)
- Construction (engineering)
- Sleeping (hotel)
- Bags (shopping_bag)
- Kitchen (soup_kitchen)
- Bathroom (bathtub)
- Decoration (panorama)
- Christmas (park)
- Dining (restaurant)
- Office Supplies (edit_note)
- Bicycle (pedal_bike)
- Car (directions_car)
- Book (auto_stories)
- Sports (sports_tennis)

## How to Use

1. Open the `index.html` file in your web browser
2. Select/deselect the checkboxes for the stickers you want to print
3. Adjust the quantity for each sticker as needed
4. Optionally, toggle the "Use outline icons" checkbox for a different style
5. Use the utility buttons to:
   - Toggle all checkboxes on/off at once
   - Reset all quantities to 1
6. Click the "Print Stickers" button
7. In the print dialog:
   - Make sure to select "A4" as the paper size
   - Set margins to "None" or the minimum possible
   - Disable any headers and footers
   - Select "Scale: 100%" (do not fit to page)
8. Print the stickers on your sticky paper
9. Cut along the thin border lines with scissors

## Technical Details

- The stickers are sized exactly 100mm x 100mm for printing
- The layout automatically arranges stickers to fit as many as possible on an A4 page
- Uses Google's Material Icons (both filled and outlined versions)
- Uses Font Awesome for specific icons (clothing and shoes)
- Some Font Awesome icons always display in solid style as they don't have outline versions
- The solution works offline once loaded (except for Material Icons and Font Awesome which require internet)

## Customization

If you need to add more sticker types or change icons, edit the `stickerData` object in the `script.js` file. The object supports:

- Material Icons (type: 'material')
- Font Awesome icons (type: 'fontawesome')
- Mixed icon types (type: 'mixed') for stickers with multiple icons
