import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {BaseIcon} from '../ui/common/components/icons/base-icon';
import {Avatar} from '../ui/common/components/util-component/avatar';
import {NavChip} from './components/nav-chip';
import {IconName} from '../ui/common/components/icons/icon-library';

export const TopNav = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainNav}>
        <Image
          style={styles.logo}
          source={require('../assets/images/yt-logo.png')}
        />
        <View style={styles.topNavRight}>
          <BaseIcon size={24} name="castIcon" />
          <BaseIcon size={24} name="bell" />
          <BaseIcon size={24} name="search" />
          <Avatar />
        </View>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={styles.secondaryNav}
        showsHorizontalScrollIndicator={false}
        scrollEnabled>
        {secondaryNavData.map(navItem => {
          return (
            <NavChip
              key={navItem.id}
              title={navItem.title}
              icon={navItem.icon}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 12,
  },
  mainNav: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topNavRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    width: 90,
    height: 20,
  },
  secondaryNav: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    gap: 12,
  },
});

type SecondaryNavData = {
  id: number;
  title: string;
  icon?: IconName;
};

const secondaryNavData: SecondaryNavData[] = [
  {
    id: 1,
    title: 'Explore',
    icon: 'explore',
  },
  {
    id: 2,
    title: 'Music',
  },
  {
    id: 3,
    title: 'Live',
  },
  {
    id: 4,
    title: 'Live',
  },

  {
    id: 5,
    title: 'Live',
  },
  {
    id: 6,
    title: 'Live',
  },
];
