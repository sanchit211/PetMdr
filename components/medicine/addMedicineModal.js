import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  requestCameraPermission,
  requestExternalWritePermission,
} from '../permissions';
import {horizontalScale, verticalScale} from '../../responsiveness';
import Freequency from './freequency';

const AddMedicineModal = ({isVisible, toggleModal}) => {
  const [isStrengthModalVisible, setStrengthModalVisible] = useState(false);
  const [medicineName, setMedicineName] = useState('');
  const [imageData, setImageData] = useState(null);
  const [isFreequencyModalVisible, setFreequencyModalVisible] = useState(false);

  const toggleFreequencyModal = () => {
    setFreequencyModalVisible(!isFreequencyModalVisible);
  };

  const toggleStrengthModal = () => {
    setStrengthModalVisible(!isStrengthModalVisible);
  };
  //for selecting image
  const chooseFile = () => {
    try {
      let options = {
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 550,
        quality: 1,
      };
      launchImageLibrary(options, response => {
        if (response?.assets?.length > 0) {
          const selectedImage = response.assets[0];
          setImageData({
            uri: selectedImage.uri,
            name: selectedImage.fileName,
            type: selectedImage.type,
          });
        }
      });
    } catch (error) {
      console.log('Error in choose file', error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <Modal isVisible={isVisible}>
        <View
          style={{
            backgroundColor: '#fff',
            minHeight: '65%',
            borderRadius: 10,
            paddingVertical: 10,
          }}>
          <ScrollView>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 22,
                color: '#253141',
                marginTop: 10,
                alignSelf: 'center',
              }}>
              ADD MEDICINE
            </Text>

            {/* name of medication  */}
            <View style={{flexDirection: 'row'}}>
              <View style={[styles.input, {flexDirection: 'row'}]}>
                <TouchableOpacity>
                  <Image
                    source={require('../../Images/medicine/medical.png')}
                    style={{
                      width: horizontalScale(17),
                      height: verticalScale(17),
                      marginTop: 12,
                      marginRight: 10,
                    }}
                  />
                </TouchableOpacity>
                <TextInput
                  placeholder="Name of Medication"
                  placeholderTextColor={'#00000045'}
                  onChangeText={text => setMedicineName(text)}
                  value={medicineName}
                />
              </View>
              <TouchableOpacity>
                <Image
                  source={require('../../Images/medicine/ocr.png')}
                  style={{
                    width: horizontalScale(20),
                    height: verticalScale(20),
                    marginTop: verticalScale(30),
                    marginRight: 10,
                  }}
                />
              </TouchableOpacity>
            </View>

            {/* medication strength */}

            <TouchableOpacity
              style={[styles.inputBox, {flexDirection: 'row'}]}
              onPress={() => {
                toggleStrengthModal();
                toggleModal();
              }}>
              <Image
                source={require('../../Images/medicine/medicine.png')}
                style={{
                  width: horizontalScale(15),
                  height: verticalScale(15),
                  resizeMode: 'contain',
                  marginTop: 12,
                  marginRight: 10,
                }}
              />

              <TextInput
                placeholder="Medication Strength"
                placeholderTextColor={'#00000045'}
              />
            </TouchableOpacity>

            {/* doctor name */}

            <View style={[styles.inputBox, {flexDirection: 'row'}]}>
              <TouchableOpacity>
                <Image
                  source={require('../../Images/medicine/profile.png')}
                  style={{
                    width: horizontalScale(17),
                    height: verticalScale(17),
                    resizeMode: 'contain',
                    marginTop: 12,
                    marginRight: 10,
                  }}
                />
              </TouchableOpacity>
              <TextInput
                placeholder="Doctor's Name"
                placeholderTextColor={'#00000045'}
              />
            </View>

            {/* upload medicine photo */}
            <TouchableOpacity
              onPress={chooseFile}
              style={[styles.inputBox, {flexDirection: 'row'}]}>
              <Image
                source={require('../../Images/medicine/ic_round-cloud-upload.png')}
                style={{
                  width: horizontalScale(17),
                  height: verticalScale(17),
                  resizeMode: 'contain',
                  marginTop: 12,
                  marginRight: 10,
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 14,
                    color: '#00000045',
                    paddingVertical: 14,
                    alignSelf: 'center',
                  }}>
                  Upload Medicine Photo
                </Text>
                {imageData ? (
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      resizeMode: 'contain',
                      marginRight: 20,
                    }}
                    source={{uri: imageData.uri}}
                  />
                ) : null}
              </View>
            </TouchableOpacity>

            {/* upload prescription */}

            {/* upload medicine photo */}
            <TouchableOpacity style={[styles.inputBox, {flexDirection: 'row'}]}>
              <Image
                source={require('../../Images/medicine/ic_round-cloud-upload.png')}
                style={{
                  width: horizontalScale(17),
                  height: verticalScale(17),
                  resizeMode: 'contain',
                  marginTop: 12,
                  marginRight: 10,
                }}
              />

              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 14,
                  color: '#00000045',
                  paddingVertical: 14,
                  alignSelf: 'center',
                }}>
                Upload Prescription
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                onPress={toggleModal}
                style={{
                  backgroundColor: '#EEF7FF',
                  padding: 10,
                  width: '42%',
                  borderRadius: 6,
                  marginLeft: 6,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    color: '#2ADDF3',
                    fontWeight: '600',
                    fontSize: 16,
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#F95880',
                  padding: 10,
                  width: '42%',
                  borderRadius: 6,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: 16,
                  }}>
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>

      {/* doses modal*/}
      <Modal isVisible={isStrengthModalVisible}>
        <View
          style={{
            backgroundColor: '#fff',
            minHeight: '50%',
            borderRadius: 10,
            paddingVertical: 10,
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 22,
              color: '#253141',
              marginTop: 10,
              alignSelf: 'center',
            }}>
            DOSES
          </Text>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 18,
              color: '#253141',
              marginTop: 16,
              alignSelf: 'center',
            }}>
            When will this medication be taken?
          </Text>

          {/* freequency */}

          <TouchableOpacity
            style={[
              styles.inputBox,
              {
                flexDirection: 'row',
                paddingVertical: 14,
                justifyContent: 'space-between',
              },
            ]}
            onPress={() => {toggleFreequencyModal()
              toggleStrengthModal()}}
            >
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../Images/medicine/freequency.png')}
                style={{
                  width: horizontalScale(17),
                  height: verticalScale(17),
                  resizeMode: 'contain',
                  // marginTop: 12,
                  marginRight: 10,
                }}
              />

              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 14,
                  color: '#00000045',
                  alignSelf: 'center',
                }}>
                Freequency
              </Text>
            </View>
            <View>
              <Image
                source={require('../../Images/right_arrow.png')}
                style={{
                  width: horizontalScale(12),
                  height: verticalScale(12),
                  resizeMode: 'contain',
                  marginTop: 2,
                  marginRight: 10,
                }}
              />
            </View>
          </TouchableOpacity>

          {/* addtime */}

          <TouchableOpacity
            style={[
              styles.inputBox,
              {
                flexDirection: 'row',
                paddingVertical: 14,
                justifyContent: 'space-between',
              },
            ]}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../Images/medicine/time.png')}
                style={{
                  width: horizontalScale(17),
                  height: verticalScale(17),
                  resizeMode: 'contain',
                  // marginTop: 12,
                  marginRight: 10,
                }}
              />

              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 14,
                  color: '#00000045',
                  alignSelf: 'center',
                }}>
                Add Time
              </Text>
            </View>
            <View>
              <Image
                source={require('../../Images/right_arrow.png')}
                style={{
                  width: horizontalScale(12),
                  height: verticalScale(12),
                  resizeMode: 'contain',
                  marginTop: 2,
                  marginRight: 10,
                }}
              />
            </View>
          </TouchableOpacity>

          {/* add duration */}

          <TouchableOpacity
            style={[
              styles.inputBox,
              {
                flexDirection: 'row',
                paddingVertical: 14,
                justifyContent: 'space-between',
              },
            ]}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../Images/medicine/calendar.png')}
                style={{
                  width: horizontalScale(17),
                  height: verticalScale(17),
                  resizeMode: 'contain',
                  // marginTop: 12,
                  marginRight: 10,
                }}
              />

              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 14,
                  color: '#00000045',
                  alignSelf: 'center',
                }}>
                Add Duration
              </Text>
            </View>
            <View>
              <Image
                source={require('../../Images/right_arrow.png')}
                style={{
                  width: horizontalScale(12),
                  height: verticalScale(12),
                  resizeMode: 'contain',
                  marginTop: 2,
                  marginRight: 10,
                }}
              />
            </View>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              onPress={() => toggleStrengthModal()}
              style={{
                backgroundColor: '#EEF7FF',
                padding: 10,
                width: '42%',
                borderRadius: 6,
                marginLeft: 6,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  color: '#2ADDF3',
                  fontWeight: '600',
                  fontSize: 16,
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#F95880',
                padding: 10,
                width: '42%',
                borderRadius: 6,
                marginLeft: 10,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  color: '#fff',
                  fontWeight: '600',
                  fontSize: 16,
                }}>
                Add
              </Text>
            </TouchableOpacity>
          </View>
        </View>
  
      </Modal>
      <Freequency isVisible={isFreequencyModalVisible} toggleModal={toggleFreequencyModal}  />
   
    </KeyboardAvoidingView>
  );
};

export default AddMedicineModal;

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    width: '75%',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 6,
    paddingHorizontal: 15,
    marginHorizontal: 20,
  },
  inputBox: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 6,
    paddingHorizontal: 15,
    marginHorizontal: 20,
  },
});
