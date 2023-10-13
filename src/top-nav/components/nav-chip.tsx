import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../assets/colors/colors';
import {BaseIcon} from '../../ui/common/components/icons/base-icon';
import {IconName} from '../../ui/common/components/icons/icon-library';

interface NavChipProps {
  title: string;
  icon?: IconName;
}

export const NavChip = ({title, icon}: NavChipProps) => {
  return (
    <View style={styles.chip}>
      {icon && <BaseIcon size={16} name={icon} />}
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: Colors.grey.light,
    padding: 8,
    textAlign: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 10,
    color: Colors.black.primary,
    fontSize: 14,
    fontFamily: 'Roboto',
    alignSelf: 'flex-start',
  },
});
