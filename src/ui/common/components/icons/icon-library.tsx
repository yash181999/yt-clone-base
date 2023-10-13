import CastIcon from '../../../../assets/icons/cast.svg';
import BellIcon from '../../../../assets/icons/bell.svg';
import SearchIcon from '../../../../assets/icons/search.svg';
import AvatarIcon from '../../../../assets/images/avatar.svg';
import ExploreIcon from '../../../../assets/icons/explore.svg';

export const IconLibrary = {
  castIcon: CastIcon,
  bell: BellIcon,
  search: SearchIcon,
  avatar: AvatarIcon,
  explore: ExploreIcon,
};

export type IconName = keyof typeof IconLibrary;
