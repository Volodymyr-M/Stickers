document.addEventListener('DOMContentLoaded', function() {
    // Define sticker data with appropriate icons (mix of Material Icons and Font Awesome)
    const stickerData = {
        'tools': { icons: ['handyman'], type: 'material' },
        'furniture': { icons: ['chair'], type: 'material' },
        'clothing-female': { icons: ['fa-shirt', 'woman'], type: 'mixed' },
        'clothing-male': { icons: ['fa-shirt', 'man'], type: 'mixed' },
        'shoes-female': { icons: ['fa-shoe-prints', 'woman'], type: 'mixed' },
        'shoes-male': { icons: ['fa-shoe-prints', 'man'], type: 'mixed' },
        'gardening': { icons: ['local_florist'], type: 'material' },
        'electronics': { icons: ['power'], type: 'material' },
        'construction': { icons: ['engineering'], type: 'material' },
        'sleeping': { icons: ['hotel'], type: 'material' },
        'bags': { icons: ['shopping_bag'], type: 'material' },
        'kitchen': { icons: ['soup_kitchen'], type: 'material' },
        'bathroom': { icons: ['bathtub'], type: 'material' },
        'decoration': { icons: ['panorama'], type: 'material' },
        'christmas': { icons: ['park'], type: 'material' },
        'dining': { icons: ['restaurant'], type: 'material' },
        'office-supplies': { icons: ['edit_note'], type: 'material' },
        'bicycle': { icons: ['pedal_bike'], type: 'material' },
        'car': { icons: ['directions_car'], type: 'material' },
        'book': { icons: ['auto_stories'], type: 'material' },
        'sports': { icons: ['sports_tennis'], type: 'material' }
    };

    // Font Awesome icons that don't have regular (outline) versions or should always use solid
    const alwaysUseSolid = ['fa-shoe-prints', 'fa-shirt'];

    // Function to generate stickers
    function generateStickers() {
        const printArea = document.querySelector('.print-area');
        printArea.innerHTML = ''; // Clear existing stickers
        
        // Get selected stickers
        const checkboxes = document.querySelectorAll('input[type="checkbox"][data-sticker]:checked');
        const useOutlineIcons = document.getElementById('outline-icons').checked;
        
        checkboxes.forEach(checkbox => {
            const stickerId = checkbox.getAttribute('data-sticker');
            const stickerInfo = stickerData[stickerId];
            
            if (stickerInfo) {
                // Get quantity for this sticker
                const quantityInput = document.querySelector(`.quantity-input[data-sticker="${stickerId}"]`);
                const quantity = quantityInput ? parseInt(quantityInput.value, 10) || 1 : 1;
                
                // Generate the specified number of stickers
                for (let i = 0; i < quantity; i++) {
                    const sticker = document.createElement('div');
                    sticker.className = 'sticker';
                    
                    const iconContainer = document.createElement('div');
                    iconContainer.className = 'icon-container';
                    
                    // For single icon stickers, add a centering wrapper
                    if (stickerInfo.icons.length === 1) {
                        const centerWrapper = document.createElement('div');
                        centerWrapper.className = 'center-wrapper';
                        
                        // Create the icon
                        let iconElement;
                        if (stickerInfo.type === 'material') {
                            iconElement = document.createElement('span');
                            iconElement.className = useOutlineIcons ? 
                                'material-icons-outlined icon' : 'material-icons icon';
                            iconElement.textContent = stickerInfo.icons[0];
                        } else {
                            iconElement = document.createElement('i');
                            // Always use solid for certain icons
                            const useSolid = alwaysUseSolid.includes(stickerInfo.icons[0]);
                            iconElement.className = (useOutlineIcons && !useSolid) ? 
                                `fa-regular ${stickerInfo.icons[0]} icon` : `fa-solid ${stickerInfo.icons[0]} icon`;
                        }
                        
                        centerWrapper.appendChild(iconElement);
                        iconContainer.appendChild(centerWrapper);
                    } else {
                        // Add icons for multi-icon stickers
                        stickerInfo.icons.forEach((icon, index) => {
                            let iconElement;
                            
                            if (stickerInfo.type === 'material' || (stickerInfo.type === 'mixed' && index === 1)) {
                                // Material Icons
                                iconElement = document.createElement('span');
                                iconElement.className = useOutlineIcons ? 
                                    'material-icons-outlined icon' : 'material-icons icon';
                                if (index === 1) {
                                    iconElement.className += ' gender-icon';
                                }
                                iconElement.textContent = icon;
                            } else {
                                // Font Awesome
                                iconElement = document.createElement('i');
                                // Always use solid for certain icons
                                const useSolid = alwaysUseSolid.includes(icon);
                                iconElement.className = (useOutlineIcons && !useSolid) ? 
                                    `fa-regular ${icon} icon` : `fa-solid ${icon} icon`;
                            }
                            
                            iconContainer.appendChild(iconElement);
                        });
                    }
                    
                    sticker.appendChild(iconContainer);
                    printArea.appendChild(sticker);
                }
            }
        });
    }

    // Toggle all checkboxes function
    function toggleAllCheckboxes() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"][data-sticker]');
        // Check if all are checked
        const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
        
        // If all are checked, uncheck all; otherwise, check all
        checkboxes.forEach(checkbox => {
            checkbox.checked = !allChecked;
        });
        
        // Update stickers
        generateStickers();
    }
    
    // Reset all quantities to 1
    function resetAllQuantities() {
        const quantityInputs = document.querySelectorAll('.quantity-input');
        quantityInputs.forEach(input => {
            input.value = 1;
        });
        
        // Update stickers
        generateStickers();
    }

    // Generate stickers on page load
    generateStickers();

    // Update stickers when checkboxes change
    const checkboxes = document.querySelectorAll('input[type="checkbox"][data-sticker]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', generateStickers);
    });

    // Update stickers when quantity inputs change
    const quantityInputs = document.querySelectorAll('.quantity-input');
    quantityInputs.forEach(input => {
        input.addEventListener('change', generateStickers);
        input.addEventListener('input', generateStickers);
    });

    // Update stickers when outline option changes
    document.getElementById('outline-icons').addEventListener('change', generateStickers);

    // Add event listeners for utility buttons
    document.getElementById('toggle-all-btn').addEventListener('click', toggleAllCheckboxes);
    document.getElementById('reset-quantities-btn').addEventListener('click', resetAllQuantities);

    // Print button functionality
    document.getElementById('print-btn').addEventListener('click', function() {
        window.print();
    });
});
