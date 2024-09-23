import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';


const contentData = [
    {
      id: '1',
      title: 'Template Name',
      description: 'Lorem ipsum dolor sit amet',
      image: require('../assets/frame.png')
    },
    {
      id: '2',
      title: 'Template Name',
      description: 'Lorem ipsum dolor sit amet',
      image:require('../assets/frame.png')
    },
    {
      id: '3',
      title: 'Template Name',
      description: 'Lorem ipsum dolor sit amet',
      image: require('../assets/frame.png'), 
    },
    {
      id: '4',
      title: 'Template Name',
      description: 'Lorem ipsum dolor sit amet',
      image: '../assets/frame.png'
    },
  ];

const Home = () => {
    const renderContentItem = ({ item }) => (
        <View style={styles.card}>
          <Image source={item.image} style={styles.templateImage} />
          <Text style={styles.templateTitle}>{item.title}</Text>
          <Text style={styles.templateDescription}>{item.description}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.esignButton}>
              <Image source={require('../assets/sign.png')} style={styles.signImage} />
              <Text style={styles.buttonText}>E-Sign</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.realEstateButton}>
              <Text style={styles.buttonTextRealEstate}>Real Estate</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.useTemplateButton}>
            <Text style={styles.useTemplateText}>Use Template</Text>
          </TouchableOpacity>
        </View>
      );
    
  return (
    <FlatList
        data={contentData}
        renderItem={renderContentItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
  />
  );
};

const styles = StyleSheet.create({
    navOptions: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
      },
    
      navText: {
        fontSize: 14,
        color: '#000',
      },
      list: {
        paddingBottom: 20,
      },
      card: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        backgroundColor: '#fff',
      },
      templateImage: {
        width: '100%',
        height: 150,
        resizeMode: 'stretch',
        marginBottom: 8,
      },
      signImage: {
        height: 16,
        width: 16,
        marginRight: 5
      },
      templateTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      templateDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 16,
      },
      buttonContainer: {
        flexDirection: 'row',
        marginBottom: 16,
      },
      esignButton: {
        backgroundColor: '#0066C3',
        padding: 8,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center'
      },
      realEstateButton: {
        backgroundColor: '#FFD8CF',
        padding: 8,
        borderRadius: 4,
        marginLeft: 10
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
      buttonTextRealEstate: {
        color: '#000',
      },
      useTemplateButton: {
        backgroundColor: '#081539',
        padding: 10,
        borderRadius: 4,
        alignItems: 'center',
      },
      useTemplateText: {
        color: '#fff',
        fontWeight: 'bold',
      },
});

export default Home;
