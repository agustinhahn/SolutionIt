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
            <Text style={styles.textlabel}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        flex:1
    },
    checkbox: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: colors.gray6,
        marginRight: 10,
    },
    checked: {
        backgroundColor: colors.lightBlue8,
    },
    textlabel: {
        fontSize: 16,
        color: colors.gray7,
        marginLeft: 5
    }
});

export default CheckBoxIT;
