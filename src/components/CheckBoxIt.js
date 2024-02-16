import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {colors} from "../global/colors"

const CheckBoxIT = ({ label, onChange, value }) => {
    const [isChecked, setIsChecked] = useState(value);
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
        onChange && onChange(!isChecked);
    };

    return (
        <TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheckbox}>
            <View style={[styles.checkbox, isChecked && styles.checked]} />
            <Text>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        marginRight: 10,
    },
    checked: {
        backgroundColor: colors.lightBlue7,
    },
});

export default CheckBoxIT;
