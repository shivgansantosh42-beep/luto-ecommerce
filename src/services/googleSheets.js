import Papa from 'papaparse';

// The published CSV link to the user's Google Sheet
const GOOGLE_SHEETS_CSV_URL = 'https://docs.google.com/spreadsheets/d/10Sy5RqKdUUENDk8RWRiNhADCadRT2OF2SGAUDjnYSVY/pub?output=csv&gid=113121807';

export const fetchProducts = () => {
    return new Promise((resolve, reject) => {
        Papa.parse(GOOGLE_SHEETS_CSV_URL, {
            download: true,
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            complete: (results) => {
                try {
                    // Transform the flat CSV data into the structured object our app expects
                    const products = results.data.map(product => {
                        // The images column is comma-separated strings.
                        // Split it into an array, and clean up any whitespace/quotes.
                        let imageArray = [];
                        if (product.images) {
                            imageArray = product.images.split(',').map(img => img.trim().replace(/^"|"$/g, ''));
                        }

                        return {
                            id: product.id,
                            name: product.name,
                            category: product.category,
                            price: product.price,
                            image: imageArray[0] || '', // Provide a fallback for the main image
                            images: imageArray, // Provide all images
                            rating: product.rating,
                            description: product.description,
                            isNew: Boolean(product.isNew)
                        };
                    });
                    resolve(products);
                } catch (err) {
                    reject(new Error('Failed to transform product data'));
                }
            },
            error: (error) => {
                reject(error);
            }
        });
    });
};
