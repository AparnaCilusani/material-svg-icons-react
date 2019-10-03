/* eslint-disable react/display-name */
import React from 'react';

import * as Home from './Home';
import * as Account from './Account';
import * as Calender from './Calender';
import * as Check from './Check';
import * as Chervon from './Chervon';
import * as List from './List';
import * as MultiAccount from './MultiAccount';
import * as Pallet from './Pallet';
import * as PlusCircle from './PlusCircle';
import * as Send from './Send';
import * as Setting from './Settings';
import * as View from './View';
import * as Dots from './Dots';
import * as Clipboard from './Clipboard';
import * as ClipBoardText from './ClipBoardText';
import * as Star from './Star';
import CheckBook from './CheckBook';
import TicketConfirmation from './TicketConfirmation';
import Maginfy from './Magnify';
import Blur from './Blur';
import * as NumbersFilled from './NumbersFilled';
import * as Pin from './Pin';
import * as Wallet from './Wallet';
import * as Ticket from './Ticket';
import * as Tune from './Tune';
import * as Attachment from './Attachment';
import * as Pencil from './Pencil';
import * as CheckCircle from './CheckCircle';
import * as NumbersOutline from './NumbersOutline';
import * as Alert from './Alert';
import AndroidMessages from './AndroidMessage';
import AutoFix from './AutoFix';
import * as BookOpen from './BookOpen';
import * as Brief from './Brief';
import CheckAll from './CheckAll';
import CubeScan from './CubeScan';
import * as File from './File';
import * as Forum from './Forum';
import * as Help from './Help';
import * as Location from './Location';
import Tag from './Tag'
import Add from './Add'
import Clear from './Clear'
import * as Arrow from './Arrows';
import * as CalendarRange from './Calendar-range';
import * as Clock from './Clock';
import * as Email from './Email';
import * as City from './City';
import * as Phone from './Phone';

const IconList = {
	'view-module': (props) => <View.Module {...props} />,
	'view-quilt': (props) => <View.Quilt {...props} />,
	home: (props) => <Home.Filled {...props} />,
	'home-outline': (props) => <Home.Outlined {...props} />,
	account: (props) => <Account.Filled {...props} />,
	'account-outline': (props) => <Account.Outlined {...props} />,
	check: (props) => <Check.Filled {...props} />,
	'check-outline': (props) => <Check.Outlined {...props} />,
	'chevron-down': (props) => <Chervon.Down {...props} />,
	'chevron-up': (props) => <Chervon.Up {...props} />,
	'chevron-left': (props) => <Chervon.Left {...props} />,
	'chevron-right': (props) => <Chervon.Right {...props} />,
	'format-list-checkbox': (props) => <List.ListCheckbox {...props} />,
	'view-list': (props) => <List.ViewList {...props} />,
	'format-list-bulleted-square': (props) => <List.ListBulletSquare {...props} />,
	calendar: (props) => <Calender.Filled {...props} />,
	'calendar-outline': (props) => <Calender.Outlined {...props} />,
	'account-multiple': (props) => <MultiAccount.Filled {...props} />,
	'account-multiple-outline': (props) => <MultiAccount.Outlined {...props} />,
	'settings-outline': (props) => <Setting.Outlined {...props} />,
	settings: (props) => <Setting.Filled {...props} />,
	'palette-outline': (props) => <Pallet.Outlined {...props} />,
	palette: (props) => <Pallet.Filled {...props} />,
	'plus-circle-outline': (props) => <PlusCircle.Outlined {...props} />,
	'plus-circle': (props) => <PlusCircle.Filled {...props} />,
	star: (props) => <Star.Filled {...props} />,
	'star-outline': (props) => <Star.Outlined {...props} />,
	send: (props) => <Send.Filled {...props} />,
	blur: (props) => <Blur {...props} />,
	'dots-vertical': (props) => <Dots.Verical {...props} />,
	'dots-horizontal': (props) => <Dots.Horizontal {...props} />,
	'clipboard-check': (props) => <Clipboard.Filled {...props} />,
	'clipboard-check-outline': (props) => <Clipboard.Outlined {...props} />,
	'clipboard-text': (props) => <ClipBoardText.Filled {...props} />,
	'clipboard-text-outline': (props) => <ClipBoardText.Outlined {...props} />,
	checkbook: (props) => <CheckBook {...props} />,
	'ticket-confirmation': (props) => <TicketConfirmation {...props} />,
	'numeric-0-box': (props) => <NumbersFilled.Zero {...props} />,
	'numeric-1-box': (props) => <NumbersFilled.One {...props} />,
	'numeric-2-box': (props) => <NumbersFilled.Two {...props} />,
	'numeric-3-box': (props) => <NumbersFilled.Three {...props} />,
	'numeric-4-box': (props) => <NumbersFilled.Four {...props} />,
	'numeric-5-box': (props) => <NumbersFilled.Five {...props} />,
	'numeric-6-box': (props) => <NumbersFilled.Six {...props} />,
	'numeric-7-box': (props) => <NumbersFilled.Seven {...props} />,
	'numeric-8-box': (props) => <NumbersFilled.Eight {...props} />,
	'numeric-9-box': (props) => <NumbersFilled.Nine {...props} />,
	'numeric-0-box-outline': (props) => <NumbersOutline.Zero {...props} />,
	'numeric-1-box-outline': (props) => <NumbersOutline.One {...props} />,
	'numeric-2-box-outline': (props) => <NumbersOutline.Two {...props} />,
	'numeric-3-box-outline': (props) => <NumbersOutline.Three {...props} />,
	'numeric-4-box-outline': (props) => <NumbersOutline.Four {...props} />,
	'numeric-5-box-outline': (props) => <NumbersOutline.Five {...props} />,
	'numeric-6-box-outline': (props) => <NumbersOutline.Six {...props} />,
	'numeric-7-box-outline': (props) => <NumbersOutline.Seven {...props} />,
	'numeric-8-box-outline': (props) => <NumbersOutline.Eight {...props} />,
	'numeric-9-box-outline': (props) => <NumbersOutline.Nine {...props} />,
	'alert-circle-outline': (props) => <Alert.Outlined {...props} />,
	'alert-circle': (props) => <Alert.Filled {...props} />,
	'android-messages': (props) => <AndroidMessages {...props} />,
	'auto-fix': (props) => <AutoFix {...props} />,
	'book-open': (props) => <BookOpen.Filled {...props} />,
	'book-open-outline': (props) => <BookOpen.Outlined {...props} />,
	'briefcase-check': (props) => <Brief.BriefCheck {...props} />,
	'briefcase-outline': (props) => <Brief.Outlined {...props} />,
	'check-all': (props) => <CheckAll {...props} />,
	'cube-scan': (props) => <CubeScan {...props} />,
	'file-document-box': (props) => <File.File {...props} />,
	'file-document-box': (props) => <File.File {...props} />,
	'file-document-outline': (props) => <File.FileOutline {...props} />,
	forum: (props) => <Forum.Forum {...props} />,
	'forum-outline': (props) => <Forum.ForumOutline {...props} />,
	'help-circle-outline': (props) => <Help.Help {...props} />,
	'help-circle': (props) => <Help.HelpOutline {...props} />,
	'map-marker-check': (props) => <Location.MapMarkerCheck {...props} />,
	'map-marker-outline': (props) => <Location.MapMarkerOutline {...props} />,
	'map-marker': (props) => <Location.MapMarker {...props} />,
	magnify: (props) => <Maginfy {...props} />,
	pin: (props) => <Pin.Filled {...props} />,
	'pin-outline': (props) => <Pin.Outlined {...props} />,
	'wallet-outline': (props) => <Wallet.Outlined {...props} />,
	wallet: (props) => <Wallet.Filled {...props} />,
	ticket: (props) => <Ticket.Filled {...props} />,
	tune: (props) => <Tune.Horizontal {...props} />,
	'tune-vertical': (props) => <Tune.Vertical {...props} />,
	attachment: (props) => <Attachment.Attachment {...props} />,
	pencil: (props) => <Pencil.Filled {...props} />,
	'pencil-outline': (props) => <Pencil.Outlined {...props} />,
	'check-circle': (props) => <CheckCircle.Filled {...props} />,
	'check-circle-outline': (props) => <CheckCircle.Outlined {...props} />,
	tag:(props) => <Tag {...props} />,
	plus:(props) => <Add {...props} />,
	close:(props) => <Clear {...props} />,

	'chevron-down': (props) => <Arrow.Down {...props} />,
	'chevron-left': (props) => <Arrow.Left {...props} />,
	'chevron-right': (props) => <Arrow.Right {...props} />,
	'chevron-up': (props) => <Arrow.Up {...props} />,
	'calendar-range': (props) => <CalendarRange.Filled {...props} />,
	'calendar-range-outline': (props) => <CalendarRange.Outlined {...props} />,
	 clock: (props) => <Clock.Filled {...props} />,
	'clock-outline': (props) => <Clock.Outlined {...props} />,
	 email: (props) => <Email.Filled {...props} />,
	'email-outline': (props) => <Email.Outlined {...props} />,
	 city: (props) => <City.City {...props} />,
	 phone:(props) => <Phone.Phone {...props} />,
};
const Icon = (props) => {
	return IconList[props.name] ? IconList[props.name](props) : IconList['blur'](props);
};

export default Icon;
