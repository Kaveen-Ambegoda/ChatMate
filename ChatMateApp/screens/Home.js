import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import 'react-native-gesture-handler';

function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.premiumPlan}>
        <View style={styles.premiumPlanContent}>
          <View style={styles.premiumText}>
            <Text style={styles.planTitle}>Premium Plan</Text>
            <Text style={styles.planSubtitle}>Unlock Sundae's potentials and get all premium features</Text>
            <TouchableOpacity style={styles.upgradeButton}>
              <Text style={styles.upgradeText}>Upgrade</Text>
            </TouchableOpacity>
          </View>
          <Image source={require('../assets/robot.png')} style={styles.robotImage} />
        </View>
      </View>

      {/* Chat Buttons */}
      <View style={styles.chatButtons}>
      <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate('Chat')}>
        <Icon name="chat" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.chatButtonText}>Chat with ChatMate</Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.chatButton}>
          <Icon name="mic" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.chatButtonText}>Talk with ChatMate</Text>
        </TouchableOpacity>
      </View>

      {/* Topics Section */}
      <View style={styles.topics}>
      <Text style={styles.sectionTitle}> Topics</Text>
      <View style={styles.topicButtons}>
      {['Daily life', 'Health', 'Develop', 'Business'].map((topic, index) => (
        <TouchableOpacity key={index} style={styles.topicButton}>
        {/* Add Icons based on the topic */}
          <Icon
            name={
              topic === 'Daily life'
                ? 'home'
                : topic === 'Health'
                ? 'favorite'
                : topic === 'Develop'
                ? 'code'
                : 'business'
            }
            size={20}
            color="#fff" 
            alignContent="center"

          />
          <Text style={styles.topicText}>{topic}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>

      {/* History Section */}
      <View style={styles.history}>
        <Text style={styles.sectionTitle}> History</Text>
        {['How can I make perfect pasta?', 'What are the best websites for designers', 'Best beaches on earth?'].map(
          (item, index) => (
            <TouchableOpacity key={index} style={styles.historyItem}>
              <Text style={styles.historyText}>{item}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#000', // Dark background
  },
  premiumPlan: {
    backgroundColor: '#1f1f1f',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  premiumPlanContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  robotImage: {
    width: 140,
    height: 180,
    marginLeft: 0,
  
  },
  premiumText: {
    flex: 1,
  },
  planTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  planSubtitle: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 10,
  },
  upgradeButton: {
    backgroundColor: '#5cb85c',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    width:148
  },
  upgradeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign:'center',
  },
  chatButtons: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center', 
    marginBottom: 20,
  },
  chatButton: {
    flexDirection: 'row',
    alignItems: 'center', 
    backgroundColor: '#1f1f1f',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  chatButtonText: {
    fontSize: 13,
    color: '#fff',
    textAlign: 'center', 
    marginLeft: 0, 
  },
  icon: {
    marginRight: 10, 
  },
  topics: {
    marginBottom: 20,
    marginLeft:2,
    marginRight:2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  topicButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent:'center',
  },
  topicButton: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  topicText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },

  history: {
  },
  historyItem: {
    backgroundColor: '#1f1f1f',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  historyText: {
    fontSize: 14,
    color: '#fff',
  },
});

export default Home;