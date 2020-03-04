import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput } from 'exoflex';

import { FONT_SIZE } from '../../../constants/fonts';
import { AddressItem } from '../../../types/types';

type Props = {
  address: AddressItem;
  onChangeAddress: (newAddress: AddressItem) => void;
};

export default function ShippingAddressForm(props: Props) {
  let { address, onChangeAddress } = props;

  return (
    <View style={styles.flex}>
      <Text style={[styles.opacity, styles.shippingInfo]}>
        {t('Shipping Information')}
      </Text>
      <TextInput
        label={t('First name')}
        autoFocus={true}
        clearTextOnFocus={false}
        autoCapitalize="words"
        textContentType="name"
        mode="flat"
        value={address.firstName}
        onChangeText={(firstName) => onChangeAddress({ ...address, firstName })}
        returnKeyType="next"
        labelStyle={styles.textInputLabel}
        containerStyle={styles.textInput}
      />
      <TextInput
        label={t('Last Name')}
        clearTextOnFocus={false}
        autoCapitalize="words"
        textContentType="name"
        mode="flat"
        value={address.lastName}
        onChangeText={(lastName) => onChangeAddress({ ...address, lastName })}
        returnKeyType="next"
        labelStyle={styles.textInputLabel}
        containerStyle={styles.textInput}
      />
      <TextInput
        label={t('Address 1')}
        clearTextOnFocus={false}
        autoCapitalize="none"
        textContentType="streetAddressLine1"
        mode="flat"
        value={address.address1}
        onChangeText={(address1) => onChangeAddress({ ...address, address1 })}
        returnKeyType="next"
        labelStyle={styles.textInputLabel}
        containerStyle={styles.textInput}
      />
      <TextInput
        label={t('Address 2 (optional)')}
        clearTextOnFocus={false}
        autoCapitalize="none"
        textContentType="streetAddressLine2"
        mode="flat"
        value={address.address2}
        onChangeText={(address2) => onChangeAddress({ ...address, address2 })}
        returnKeyType="next"
        labelStyle={styles.textInputLabel}
        containerStyle={styles.textInput}
      />
      <TextInput
        label={t('City')}
        clearTextOnFocus={false}
        autoCapitalize="words"
        textContentType="addressCity"
        mode="flat"
        value={address.city}
        onChangeText={(city) => onChangeAddress({ ...address, city })}
        returnKeyType="next"
        labelStyle={styles.textInputLabel}
        containerStyle={styles.textInput}
      />
      <TextInput
        label={t('Province')}
        clearTextOnFocus={false}
        autoCapitalize="words"
        textContentType="addressState"
        mode="flat"
        value={address.province}
        onChangeText={(province) => onChangeAddress({ ...address, province })}
        returnKeyType="next"
        labelStyle={styles.textInputLabel}
        containerStyle={styles.textInput}
      />
      <TextInput
        label={t('Country')}
        clearTextOnFocus={false}
        autoCapitalize="words"
        textContentType="countryName"
        mode="flat"
        value={address.country}
        onChangeText={(country) => onChangeAddress({ ...address, country })}
        returnKeyType="next"
        labelStyle={styles.textInputLabel}
        containerStyle={styles.textInput}
      />
      <TextInput
        label={t('Postal Code')}
        clearTextOnFocus={false}
        textContentType="postalCode"
        keyboardType="number-pad"
        mode="flat"
        value={address.zip}
        onChangeText={(zip) => onChangeAddress({ ...address, zip })}
        returnKeyType="next"
        labelStyle={styles.textInputLabel}
        containerStyle={styles.textInput}
      />
      <TextInput
        label={t('Phone Number')}
        clearTextOnFocus={false}
        textContentType="telephoneNumber"
        mode="flat"
        value={address.phone}
        onChangeText={(phone) => onChangeAddress({ ...address, phone })}
        returnKeyType="done"
        labelStyle={styles.textInputLabel}
        containerStyle={styles.textInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  opacity: { opacity: 0.6 },
  textInput: { marginBottom: 24 },
  textInputLabel: { fontSize: FONT_SIZE.small },
  shippingInfo: { marginBottom: 16 },
});