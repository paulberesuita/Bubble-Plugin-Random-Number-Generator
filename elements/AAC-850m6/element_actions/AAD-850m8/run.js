function(instance, properties, context) {
    // Load min and max from properties
    const min = parseFloat(properties.min);
    const max = parseFloat(properties.max);
    const type = properties.type; // 'Integer' or 'Floating Point'
    const decimalPlaces = parseInt(properties.decimalPlaces, 10) || 0;

    // Validate min and max
    if (isNaN(min) || isNaN(max)) {
        console.error("Invalid min or max value. Please ensure both are numbers.");
        return;
    }

    if (min > max) {
        console.error("Minimum value cannot be greater than maximum value.");
        return;
    }

    let randomNumber;

    if (type === "Integer") {
        // Generate random integer between min and max (inclusive)
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } else if (type === "Floating Point") {
        // Generate random floating-point number between min and max
        randomNumber = Math.random() * (max - min) + min;
        // Round to the specified number of decimal places
        randomNumber = parseFloat(randomNumber.toFixed(decimalPlaces));
    } else {
        console.error("Invalid type specified. Please choose 'Integer' or 'Floating Point'.");
        return;
    }

    // Set the "randomnumber" state
    instance.publishState("randomnumber", randomNumber);
}