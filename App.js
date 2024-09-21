import React from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const options = [
  { id: '1', title: 'Option 1' },
  { id: '2', title: 'Option 2' },
  { id: '3', title: 'Option 3' },
  { id: '4', title: 'Option 4' },
  { id: '5', title: 'Option 5' },
];

const contentData = [
  {
    id: '1',
    title: 'Template Name',
    description: 'Lorem ipsum dolor sit amet',
    image: 'path_to_image'
  },
  {
    id: '2',
    title: 'Template Name',
    description: 'Lorem ipsum dolor sit amet',
    image: 'path_to_image'
  },
  {
    id: '3',
    title: 'Template Name',
    description: 'Lorem ipsum dolor sit amet',
    image: 'path_to_image'
  },
  {
    id: '4',
    title: 'Template Name',
    description: 'Lorem ipsum dolor sit amet',
    image: 'path_to_image'
  },
];

const App = () => {
  const renderOption = ({ item }) => (
    <TouchableOpacity style={styles.option}>
      <Text style={styles.navText}>{item.title}</Text>
      <Image
        source={require('./assets/down_logo.png')}
        style={styles.downLogo}
      />
    </TouchableOpacity>
  );

  const renderContentItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={require('./assets/frame.png')} style={styles.templateImage} />
      <Text style={styles.templateTitle}>{item.title}</Text>
      <Text style={styles.templateDescription}>{item.description}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.esignButton}>
          <Image source={require('./assets/sign.png')} style={styles.signImage} />
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
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require('./assets/dx_logo.png')}
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
      <View style={styles.searchRow}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search in all Templates"
        />
        <View style={styles.searchIconView}>
          <Image
            source={require('./assets/search.png')}
            style={styles.searchLogo}
          />
        </View>
      </View>
      <FlatList
        data={contentData}
        renderItem={renderContentItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 65.45,
    height: 48,
    resizeMode: 'contain',
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
  navOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
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
  navText: {
    fontSize: 14,
    color: '#000',
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
  searchBar: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    flex: 0.95,
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

export default App;
