import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SearchBar = () => {
    return (
        <View style={styles.searchRow}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search in all Templates"
            />
            <TouchableOpacity style={styles.searchIconView}>
                <Image
                    source={require('../assets/search.png')}
                    style={styles.searchLogo}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    searchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical:10,
        paddingHorizontal:16
    },

    searchBar: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        marginBottom: 16,
        flex: 0.95,
    },
    searchIconView: {
        backgroundColor: '#081539',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 8,
        marginBottom: 16,
    },
    searchLogo: {
        width: 24,
        height: 24
    },
});

export default SearchBar;
