import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Modal, ScrollView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-fontawesome';


export default function App() {
  const [event_name, setEvent_name] = useState('Adipurush (3D Hindi)');
  const [showmodal, setshowmodal] = useState(false);
  const [isclicked, setisclicked] = useState(false);
  const [openbody, setopenbody] = useState(true);
  const [data, setdata] = useState(range);
  const [datee, setdatee] = useState('Dates')
  const range = [
    { range: "10-200" },
    { range: "200-300" },
    { range: "300-400" },
    { range: "400-550" },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.navbar}>
          <Image style={styles.logo} source={require('../page/assets/TIXITO-white.png')} />
          <View style={styles.navbar_right}>
            <TouchableOpacity>
              <Text style={styles.sell}>Sell</Text>
            </TouchableOpacity>
            <Picker style={styles.picker} itemStyle={styles.pickerItem}>
              <Picker.Item label="Events" value="events" />
              <Picker.Item label="Concerts" value="concerts" />
              <Picker.Item label="Movies" value="movies" />
              <Picker.Item label="Trending" value="trending" />
            </Picker>
            <TouchableOpacity>
              <Image style={styles.user} source={require('../page/assets/icons8-account-50.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.navbar2}>
          <TextInput style={styles.searchbar} placeholder='Search' ></TextInput>
          <Button color="#FEC93C" style={styles.search_btn} title='Search' />
        </View>

        <View style={styles.EVent}>
          <Text style={styles.Eventname}>{event_name}</Text>
        </View>
      </View>

      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<FILTER SECTION>>>>>>>>>>>>>>>>>>>>>>>>>*/}
      <View style={styles.filter}>
        <TouchableOpacity
          style={styles.filter_functions}
          onPress={() => setshowmodal(true)}
        >
          <Text>{datee}</Text>

        </TouchableOpacity>


        <TouchableOpacity
          style={styles.filter_functions}

        >
          <Text>Location</Text>
        </TouchableOpacity>

        <Picker placeholder="range" style={styles.filter_functions} itemStyle={styles.pickerItem}>
          <Picker.Item label="All" value="100-1000" />
          <Picker.Item label="100-200" value="100-200" />
          <Picker.Item label="200-300" value="200-300" />
          <Picker.Item label="400-500" value="400-500" />
          <Picker.Item label="500-700" value="400-500" />

        </Picker>
        <Modal style={styles.showmodal} visible={showmodal} animationType='fade'>
          <Calendar style={styles.showdates}
            onDayPress={date => { console.log(date), setshowmodal(false) }}
            hideExtraDays={true}
            minDate='2023-06-30'
            maxDate=''
          />
        </Modal>
      </View>

      {isclicked ? <View style={styles.bgplane}>
        <Picker style={styles.picker} itemStyle={styles.pickerItem}>
          <Picker.Item label="MORE" value="more" />
          <Picker.Item label="Movies" value="movies" />
          <Picker.Item label="Events" value="events" />
          <Picker.Item label="Trending" value="trending" />
        </Picker>

      </View> : null}

      {openbody ? <View style={styles.body}>
        <View style={styles.body_conatiner}>
          <View style={styles.slots}>
            <View style={styles.venue}>
              <TouchableOpacity>
                <Image style={styles.like_btn} source={require('../page/assets/love.png')} />
              </TouchableOpacity>
              <Text style={styles.venue_text}>INOX: Thakur Mall, Dahisar</Text>
            </View>
            <View style={styles.timings}>
              <Text style={styles.timings_text}>12:00 Pm</Text>
              <Text style={styles.timings_text}>12:00 Pm</Text>
              <Text style={styles.timings_text}>12:00 Pm</Text>

            </View>
          </View>
          <View style={styles.slots}>
            <View style={styles.venue}>
            <TouchableOpacity>
                <Image style={styles.like_btn} source={require('../page/assets/love.png')} />
              </TouchableOpacity>
              <Text style={styles.venue_text}>INOX: Thakur Mall, Dahisar</Text>
            </View>
            <View style={styles.timings}>
              <Text style={styles.timings_text}>12:00 Pm</Text>
              <Text style={styles.timings_text}>12:00 Pm</Text>
              <Text style={styles.timings_text}>12:00 Pm</Text>

            </View>
          </View>
          <View style={styles.slots}>
            <View style={styles.venue}>
            <TouchableOpacity>
                <Image style={styles.like_btn} source={require('../page/assets/love.png')} />
              </TouchableOpacity>
              <Text style={styles.venue_text}>INOX: Thakur Mall, Dahisar</Text>
            </View>
            <View style={styles.timings}>
              <Text style={styles.timings_text}>12:00 Pm</Text>
              <Text style={styles.timings_text}>12:00 Pm</Text>
              <Text style={styles.timings_text}>12:00 Pm</Text>

            </View>
          </View>
          <View style={styles.slots}>
            <View style={styles.venue}>
            <TouchableOpacity>
                <Image style={styles.like_btn} source={require('../page/assets/love.png')} />
              </TouchableOpacity>
              <Text style={styles.venue_text}>INOX: Thakur Mall, Dahisar</Text>
            </View>
            <View style={styles.timings}>
              <Text style={styles.timings_text}>12:00 Pm</Text>
              <Text style={styles.timings_text}>12:00 Pm</Text>
              <Text style={styles.timings_text}>12:00 Pm</Text>

            </View>
          </View>



        </View>


      </View>

        : null}

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  sell: {

    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 2,
    // margin:10,
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: "#64BEEB"
  },
  user: {
    height: 25,
    width: 25
  },
  like_btn:{
height:10,
width:10,
marginRight:5
  },
  body: {
    backgroundColor: "#F2F2F2",
    height: "100%",
    width: "100%",
    padding: "2%"
  },
  body_conatiner: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    borderColor: "black",
    // borderWidth:1
    // margin:"1%"
  },

  header: {
    backgroundColor: "#20272F",
    height: "30%",
    width: "100%",
    padding: 10,
    paddingTop: 30,
    justifyContent: 'center'
  },
  navbar_right: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth:1,
    height: "100%",
    // justifyContent:'space-evenly'
  },
  navbar: {

    height: "35%",
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,

    // borderWidth:1,
    // borderColor:"white"
  },
  navbar2: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30


    // justifyContent: 'center',
  },
  searchbar: {
    backgroundColor: "white",
    padding: 10,
    width: "50%",
    borderWidth: null,
    height: 40,
    borderRadius: 30,
    margin: 10,
  },
  EVent: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor:"#222",
    alignItems: 'center',
    // justifyContent: 'center'
    // margin:17,


  },
  Eventname: {
    // backgroundColor:"gold",
    padding: 7,
    borderRadius: 5,
    color: "#ffff",
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 30
  },
  slots: {
    backgroundColor: "white",
    height: "20%",
    width: "99%",
    // borderWidth:1
    borderBottomWidth: 1,
    borderBottomColor: "#20272F",

    margin: "0.5%",
    elevation: 5
  },
  logo: {

    // marginRight:"30%",
    height: 55,
    width: 125
  },
  // navbar_elements:{
  //   // color:"white",
  //   // justifyContent:'flex-end',
  //   // fontSize:15,
  //   // fontWeight: 'bold',
  //   // marginTop:30,
  //   // marginLeft:"5%"
  // },
  filter: {
    backgroundColor: "#64BEEB",
    height: "7%",
    flexDirection: 'row',

    // borderWidth:1,
    // borderColor:"black"
  },
  venue: {
    height: "20%",
    margin: 10,
    flexDirection:'row',
    alignItems:"center"
  },
  venue_text: {
    fontFamily: '',
    fontWeight: '500'
  },
  timings: {
    // flex:1,
    flexDirection: 'row',
    // borderWidth:1
  },
  timings_text: {
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 15,
    marginLeft: 10,
    padding: 10,
    borderColor: "#FEC93C",
    // width:"15%"
    // backgroundColor:"#FEC93C",
    color: "black"
  },
  filter_functions: {


    width: "20%",
    backgroundColor: "white",
    padding: 7,
    margin: 7,
    borderRadius: 5,
    // justifyContent:'center',
    alignItems: 'center'

  },


  showdates: {
    //  height:"70%",
    width: "70%",
    alignSelf: "center",
    borderRadius: 10,
    //  borderWidth:1,
    margin: 10,
    marginTop: 50,
    padding: 20,
    elevation: 10

  },
  bgplane: {
    backgroundColor: 'white',
    width: "70%",
    height: "30%",
    alignSelf: 'center',
    elevation: 5,
    borderWidth: 1,
    margin: 10
  },
  picker: {
    backgroundColor: "#20272F",
    color: "white",
    borderWidth: 0,
    margin: 10,
    fontSize: 15

  },


});
