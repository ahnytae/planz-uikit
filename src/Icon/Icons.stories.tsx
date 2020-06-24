// external modules
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { text, withKnobs } from '@storybook/addon-knobs';

// internal modules
import icons, {
  alertCircle,
  alertOctagon,
  alertTriangle,
  alignCenter,
  alignJustify,
  alignLeft,
  alignRight,
  anchor,
  aperture,
  archive,
  arrowDown,
  arrowDownCircle,
  arrowDownLeft,
  arrowDownRight,
  arrowLeft,
  arrowLeftCircle,
  arrowRight,
  arrowRightCircle,
  arrowUp,
  arrowUpCircle,
  arrowUpLeft,
  arrowUpRight,
  atSign,
  bell,
  bellOff,
  bluetooth,
  bold,
  book,
  bookmark,
  bookOpen,
  box,
  briefcase,
  calendar,
  camera,
  cameraOff,
  cast,
  check,
  checkCircle,
  checkSquare,
  chevronDown,
  chevronLeft,
  chevronRight,
  chevronUp,
  chevronsDown,
  chevronsLeft,
  chevronsRight,
  chevronsUp,
  chrome,
  circle,
  clipboard,
  clock,
  cloud,
  cloudDrizzle,
  cloudLightning,
  cloudOff,
  cloudRain,
  cloudSnow,
  cornerDownLeft,
  cornerDownRight,
  cornerLeftDown,
  cornerLeftUp,
  cornerRightDown,
  cornerRightUp,
  cornerUpLeft,
  cornerUpRight,
  facebook,
  film,
  hash,
  instagram,
  logIn,
  logOut,
  mapPin,
  map,
  minusCircle,
  minusSquare,
  moreHorizontal,
  moreVertical,
  phone,
  rotateCcw,
  rotateCw,
  shoppingCart,
  slash,
  sliders,
  thumbsDown,
  thumbsUp,
  umbrella,
  volume1,
  volume2,
  volumeX,
  volume,
  wifiOff,
  wifi,
  xCircle,
  xOctagon,
  xSquare,
  x,
  youtube,
  zoomIn,
  zoomOut,
} from '@/icons/index.ts';
import SVGIcon from './Icon';

export default {
  title: 'components|Icons',
  component: SVGIcon,
  decorators: [withKnobs],
};

export const AlertCircle = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={alertCircle} userColor={userColor} color={color} />;
};

export const AlertOctagon = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={alertOctagon} userColor={userColor} color={color} />;
};

export const AlertTriangle = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={alertTriangle} userColor={userColor} color={color} />;
};

export const AlignCenter = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={alignCenter} userColor={userColor} color={color} />;
};

export const AlignJustify = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={alignJustify} userColor={userColor} color={color} />;
};

export const AlignLeft = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={alignLeft} userColor={userColor} color={color} />;
};

export const AlignRight = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={alignRight} userColor={userColor} color={color} />;
};

export const Anchor = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={anchor} userColor={userColor} color={color} />;
};

export const Aperture = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={aperture} userColor={userColor} color={color} />;
};

export const Archive = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={archive} userColor={userColor} color={color} />;
};

export const ArrowDown = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowDown} userColor={userColor} color={color} />;
};

export const ArrowDownCircle = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowDownCircle} userColor={userColor} color={color} />;
};

export const ArrowDownLeft = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowDownLeft} userColor={userColor} color={color} />;
};

export const ArrowDownRight = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowDownRight} userColor={userColor} color={color} />;
};

export const ArrowLeft = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowLeft} userColor={userColor} color={color} />;
};

export const ArrowLeftCircle = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowLeftCircle} userColor={userColor} color={color} />;
};

export const ArrowRight = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowRight} userColor={userColor} color={color} />;
};

export const ArrowRightCircle = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowRightCircle} userColor={userColor} color={color} />;
};

export const ArrowUp = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowUp} userColor={userColor} color={color} />;
};

export const ArrowUpCircle = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowUpCircle} userColor={userColor} color={color} />;
};

export const ArrowUpLeft = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowUpLeft} userColor={userColor} color={color} />;
};

export const ArrowUpRight = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowUpRight} userColor={userColor} color={color} />;
};

export const AtSign = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={atSign} userColor={userColor} color={color} />;
};

export const Bell = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={bell} userColor={userColor} color={color} />;
};

export const BellOff = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={bellOff} userColor={userColor} color={color} />;
};

export const Bluetooth = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={bluetooth} userColor={userColor} color={color} />;
};

export const Bold = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={bold} userColor={userColor} color={color} />;
};

export const Book = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={book} userColor={userColor} color={color} />;
};

export const Bookmark = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={bookmark} userColor={userColor} color={color} />;
};

export const BookOpen = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={bookOpen} userColor={userColor} color={color} />;
};

export const Box = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={box} userColor={userColor} color={color} />;
};

export const Briefcase = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={briefcase} userColor={userColor} color={color} />;
};

export const Calendar = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={calendar} userColor={userColor} color={color} />;
};

export const Camera = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={camera} userColor={userColor} color={color} />;
};

export const CameraOff = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cameraOff} userColor={userColor} color={color} />;
};

export const Cast = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cast} userColor={userColor} color={color} />;
};

export const Check = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={check} userColor={userColor} color={color} />;
};

export const CheckCircle = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={checkCircle} userColor={userColor} color={color} />;
};

export const CheckSquare = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={checkSquare} userColor={userColor} color={color} />;
};

export const ChevronDown = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={chevronDown} userColor={userColor} color={color} />;
};

export const ChevronLeft = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={chevronLeft} userColor={userColor} color={color} />;
};

export const ChevronRight = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={chevronRight} userColor={userColor} color={color} />;
};

export const ChevronUp = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={chevronUp} userColor={userColor} color={color} />;
};

export const ChevronsDown = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={chevronsDown} userColor={userColor} color={color} />;
};

export const ChevronsLeft = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={chevronsLeft} userColor={userColor} color={color} />;
};

export const ChevronsRight = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={chevronsRight} userColor={userColor} color={color} />;
};

export const ChevronsUp = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={chevronsUp} userColor={userColor} color={color} />;
};

export const Chrome = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={chrome} userColor={userColor} color={color} />;
};

export const Circle = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={circle} userColor={userColor} color={color} />;
};

export const Clipboard = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={clipboard} userColor={userColor} color={color} />;
};

export const Clock = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={clock} userColor={userColor} color={color} />;
};

export const Cloud = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cloud} userColor={userColor} color={color} />;
};

export const CloudDrizzle = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cloudDrizzle} userColor={userColor} color={color} />;
};

export const CloudLightning = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cloudLightning} userColor={userColor} color={color} />;
};

export const CloudOff = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cloudOff} userColor={userColor} color={color} />;
};

export const CloudRain = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cloudRain} userColor={userColor} color={color} />;
};

export const CloudSnow = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cloudSnow} userColor={userColor} color={color} />;
};

export const CornerDownLeft = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cornerDownLeft} userColor={userColor} color={color} />;
};

export const CornerDownRight = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cornerDownRight} userColor={userColor} color={color} />;
};

export const CornerLeftDown = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cornerLeftDown} userColor={userColor} color={color} />;
};

export const CornerLeftUp = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cornerLeftUp} userColor={userColor} color={color} />;
};

export const CornerRightDown = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cornerRightDown} userColor={userColor} color={color} />;
};

export const CornerRightUp = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cornerRightUp} userColor={userColor} color={color} />;
};

export const CornerUpLeft = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cornerUpLeft} userColor={userColor} color={color} />;
};

export const CornerUpRight = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cornerUpRight} userColor={userColor} color={color} />;
};

export const Facebook = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={facebook} userColor={userColor} color={color} />;
};

export const Film = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={film} userColor={userColor} color={color} />;
};

export const Hash = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={hash} userColor={userColor} color={color} />;
};

export const Instagram = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={instagram} userColor={userColor} color={color} />;
};

export const LogIn = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={logIn} userColor={userColor} color={color} />;
};

export const LogOut = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={logOut} userColor={userColor} color={color} />;
};

export const MapPin = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={mapPin} userColor={userColor} color={color} />;
};

export const Map = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={map} userColor={userColor} color={color} />;
};

export const MinusCircle = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={minusCircle} userColor={userColor} color={color} />;
};

export const MinusSquare = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={minusSquare} userColor={userColor} color={color} />;
};

export const MoreHorizontal = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={moreHorizontal} userColor={userColor} color={color} />;
};

export const MoreVertical = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={moreVertical} userColor={userColor} color={color} />;
};

export const Phone = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={phone} userColor={userColor} color={color} />;
};

export const RotateCcw = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={rotateCcw} userColor={userColor} color={color} />;
};

export const RotateCw = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={rotateCw} userColor={userColor} color={color} />;
};

export const ShoppingCart = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={shoppingCart} userColor={userColor} color={color} />;
};

export const Slash = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={slash} userColor={userColor} color={color} />;
};

export const Sliders = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={sliders} userColor={userColor} color={color} />;
};

export const ThumbsDown = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={thumbsDown} userColor={userColor} color={color} />;
};

export const ThumbsUp = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={thumbsUp} userColor={userColor} color={color} />;
};

export const Umbrella = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={umbrella} userColor={userColor} color={color} />;
};

export const Volume1 = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={volume1} userColor={userColor} color={color} />;
};

export const Volume2 = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={volume2} userColor={userColor} color={color} />;
};

export const VolumeX = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={volumeX} userColor={userColor} color={color} />;
};

export const Volume = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={volume} userColor={userColor} color={color} />;
};

export const WifiOff = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={wifiOff} userColor={userColor} color={color} />;
};

export const Wifi = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={wifi} userColor={userColor} color={color} />;
};

export const XCircle = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={xCircle} userColor={userColor} color={color} />;
};

export const XOctagon = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={xOctagon} userColor={userColor} color={color} />;
};

export const XSquare = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={xSquare} userColor={userColor} color={color} />;
};

export const X = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={x} userColor={userColor} color={color} />;
};

export const Youtube = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={youtube} userColor={userColor} color={color} />;
};

export const ZoomIn = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={zoomIn} userColor={userColor} color={color} />;
};

export const ZoomOut = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={zoomOut} userColor={userColor} color={color} />;
};

// list of icons
export const listOfIcons = () => {
  let prevIcon = null;

  // 아이콘 첫 대문자 위치
  const getFirstCapitalPos = (icon: string) => {
    const regExp = /[A-Z]/;

    return icon.match(regExp);
  };

  // 아이콘의 대문자 시작 전 소문자 가져오기
  const getSmall = (icon: string) => {
    if (getFirstCapitalPos(icon)) {
      return icon.substr(0, getFirstCapitalPos(icon).index);
    }

    return icon;
  };

  const setPrev = (icon: string) => {
    if (prevIcon !== icon) {
      prevIcon = icon;

      return true;
    }

    return false;
  };

  const iconTitles = Object.keys(icons);

  return (
    <ul css={iconListStyle}>
      {iconTitles.sort().map(icon => (
        <li key={icon}>
          <p css={iconTitle} style={{ display: setPrev(getSmall(icon)) ? 'block' : 'none' }}>
            {getSmall(icon)}
          </p>
          <div css={iconWrapper}>
            <SVGIcon component={icons[icon]} />
            {icon}
          </div>
        </li>
      ))}
    </ul>
  );
};

const iconListStyle = css`
  list-style: none;
  li {
    box-sizing: border-box;
    padding: 1rem;
    svg {
      margin-right: 1rem;
    }
  }
`;

const iconTitle = css`
  font-size: 2em;
  font-weight: 600;
`;

const iconWrapper = css`
  display: flex;
  align-items: center;
  margin-left: 1.5em;
`;
