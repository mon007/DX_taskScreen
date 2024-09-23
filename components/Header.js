import React from 'react';
import { View, Image, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const options = [
    { id: '1', title: 'Option 1' },
    { id: '2', title: 'Option 2' },
    { id: '3', title: 'Option 3' },
    { id: '4', title: 'Option 4' },
    { id: '5', title: 'Option 5' },
];

const Header = () => {
    const renderOption = ({ item }) => (
        <TouchableOpacity style={styles.option}>
            <Text style={styles.navText}>{item.title}</Text>
            <Image
                source={require('../assets/down_logo.png')}
                style={styles.downLogo}
            />
        </TouchableOpacity>
    );
    return (
        <View style={styles.overViewStyle}>
            <View style={styles.headerSection}>
                <Image
                    source={require('../assets/dx_logo.png')}
                    style={styles.logo}
                />
                <FlatList
                    data={options}
                    renderItem={renderOption}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginHorizontal: 10 }}
                />
                <TouchableOpacity style={styles.contactButton}>
                    <Text style={styles.contactButtonText}>Contact Us</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    overViewStyle: {
        overflow: 'hidden'
    },
    headerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        padding: 16

    },
    logo: {
        width: 65.45,
        height: 48,
        resizeMode: 'contain',
    },
    option: {
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    downLogo: {
        width: 8,
        height: 5,
        marginLeft: 5
    },
    contactButton: {
        backgroundColor: '#081539',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 4,
    },
    contactButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Header;
