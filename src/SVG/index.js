/* eslint-disable react/display-name */
import React from 'react';

import * as Home from './Home';
import * as Account from './Account';
import * as Calender from './Calender';
import * as Check from './Check';
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
import * as Auto from './Auto';
import * as BookOpen from './BookOpen';
import * as Brief from './Brief';
import CheckAll from './CheckAll';
import CubeScan from './CubeScan';
import * as File from './File';
import * as Forum from './Forum';
import * as Help from './Help';
import * as Location from './Location';
import * as Clear from './Clear'
import * as CalendarRange from './Calendar-range';
import * as Clock from './Clock';
import * as Email from './Email';
import * as City from './City';
import * as Phone from './Phone';
import * as Chevron from './Chevron';
import * as Arrow from './Arrow';
import * as Tag from './Tag'
import * as Add from './Add'
import * as Checkbox from './Checkbox'
import * as Minus from './Minus'
import * as ContentCopy from './ContentCopy'
import * as Delete from './Delete'
import * as Currency from './Currency'
import * as Alarm from './Alarm'
import * as Download from './Download'
import * as TicketAccount from './TicketAccount';
import * as HumanMale from './HumanMale';
import * as CalendarToday from './CalendarToday';
import * as Packages from './Package';
import * as Open from './Open';
import * as Message from './MessageText'
import * as Information from './Information'
import * as Volume from './Volume'
import * as Playlist from './Playlist'
import * as Box from './Box'
import * as Chart from './Chart'
import * as Restore from './Restore'
import * as Airplane from './Airplane'
import * as Food from './Food'
import * as Subway from './Subway'
import * as Incandescent from './Incandescent'
import * as Domain from './Domain'
import * as Filter from  './Filter'
import * as Refresh from './Refresh'
import * as Image from './Image'
import * as HeadPhones from './HeadPhone'
import * as Camera from './Camera'
import * as Sync from './Sync'
import * as CupWater from './CupWater';
import * as Finance from './Finance'
import * as HumanHandsUp from './HumanHandsUp';
import * as Bullhorn from './Bullhorn';
import * as Radar from './Radar';
import * as Assistant from './Assistant';
import * as Transition from './Transition';
import * as CheckboxMarked from './CheckboxMarked';
import * as Receipt from './Receipt';
import * as MessageDraw from './MessageDraw';
import * as Store from './Store';
import * as Walk from './Walk';
import * as AVtimer from './AVtimer';
import * as FormatLine from './FormatLine';
import * as PollBox from './PollBox';
import * as ShareVariant from './ShareVariant';
import * as Web from './Web';
import * as Google from './Google';

const IconList = {
	sync:(props) => <Sync.Sync {...props}/>,
	camera:(props) => <Camera.Camera {...props}/>,
	'headphones-box':(props) => <HeadPhones.Outline {...props}/>,
    headphones:(props) => <HeadPhones.HeadPhones {...props}/>,
	image:(props) => <Image.Image  {...props}/>,
	'message-reply-text':(props) => <Message.MessageReplyText {...props} />,
	refresh:(props) => <Refresh.Refresh {...props} />,
	'filter-variant':(props) => <Filter.Variant {...props} />,
	'cup-water':(props) => <CupWater.CupWater {...props} />,
	finance :(props) => <Finance.Finance {...props} />,
	'human-handsup':(props) => <HumanHandsUp.HumanHandsUp {...props} />,
	'bullhorn-outline': (props) => <Bullhorn.Outlined {...props} />,
	bullhorn: (props) => <Bullhorn.Filled {...props} />,
	radar:(props) => <Radar.Radar {...props} />,
	assistant:(props) => <Assistant.Assistant {...props} />,
	transition:(props) => <Transition.Filled {...props} />,
	'transition-masked':(props) => <Transition.Masked {...props} />,
	'checkbox-marked':(props) => <CheckboxMarked.Filled {...props} />,
	'checkbox-marked-outline': (props) => <CheckboxMarked.Outlined {...props} />,
	receipt: (props) => <Receipt.Receipt {...props} />,
	'message-draw':(props) => <MessageDraw.MessageDraw {...props} />,
	store:(props) => <Store.Filled {...props} />,
	'store-24-hour':(props) => <Store.Hour24 {...props} />,
	storefront:(props) => <Store.StoreFront {...props} />,
	walk:(props) => <Walk.Walk {...props} />,
	briefcase:(props) => <Brief.BriefCase {...props} />,
	'briefcase-download':(props) => <Brief.Download {...props} />,
	'av-timer':(props) => <AVtimer.AVtimer {...props} />,
	'format-line-spacing':(props) => <FormatLine.Spacing {...props} />,
	'format-line-style':(props) => <FormatLine.Styling {...props} />,
	'format-line-weight':(props) => <FormatLine.Weight {...props} />,
	'format-list-bulleted': (props) => <List.ListBulleted {...props} />,
	'poll-box': (props) => <PollBox.PollBox {...props} />,
	'share-variant': (props) => <ShareVariant.ShareVariant {...props} />,
	 web : (props) => <Web.Web {...props} />,
	 google: (props) => <Google.Google {...props} />,
	 'google-analytics': (props) => <Google.Analytics {...props} />,
	domian:(props) => <Domain.Domain {...props} />,
	'white-balance-incandescent':(props) => <Incandescent.WhiteBalance {...props} />,
	'subway-variant':(props) => <Subway.Variant {...props} />,
	'food-fork-drink':(props) => <Food.FoodFork {...props} />,
	'airplane-takeoff':(props) => <Airplane.TakeOff {...props} />,
	'restore':(props) => <Restore.Restore {...props} />,
	'chart-line-variant':(props) => <Chart.ChartLineVariant {...props} />,
	'bew-box':(props) => <Box.NewBox {...props} />,
	'autorenew':(props) => <Auto.AutoRenew {...props} />,
	autorenew:(props) => <Playlist.Check {...props} />,
	'playlist-check':(props) => <Playlist.Check {...props} />,
	'volume-off':(props) => <Volume.VolumeOff {...props} />,
	'cellphone-information':(props) => <Information.CellphoneInfo {...props} />,
	information:(props) => <Information.Information {...props} />,
	'information-outline':(props) => <Information.InformationOutline {...props} />,
	'message-text':(props) => <Message.MessageText {...props} />,
	'message-processing':(props) => <Message.MessageProcessing {...props} />,
	'view-module': (props) => <View.Module {...props} />,
	'view-quilt': (props) => <View.Quilt {...props} />,
	home: (props) => <Home.Filled {...props} />,
	'home-outline': (props) => <Home.Outlined {...props} />,
	account: (props) => <Account.Filled {...props} />,
	'account-outline': (props) => <Account.Outlined {...props} />,
	check: (props) => <Check.Filled {...props} />,
	'check-outline': (props) => <Check.Outlined {...props} />,
	'chevron-down': (props) => <Chevron.Down {...props} />,
	'chevron-up': (props) => <Chevron.Up {...props} />,
	'chevron-left': (props) => <Chevron.Left {...props} />,
	'chevron-right': (props) => <Chevron.Right {...props} />,
	'format-list-checkbox': (props) => <List.ListCheckbox {...props} />,
	'view-list': (props) => <List.ViewList {...props} />,
	'format-list-bulleted-square': (props) => <List.ListBulletSquare {...props} />,
	calendar: (props) => <Calender.Filled {...props} />,
	'calendar-outline': (props) => <Calender.Outlined {...props} />,
	'calendar-blank-outline': (props) => <Calender.Blank {...props} />,
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
	'dots-vertical': (props) => <Dots.Vertical {...props} />,
	'dots-horizontal': (props) => <Dots.Horizontal {...props} />,
	menu:(props) => <Dots.Menu {...props} />,
	'menu-up':(props) => <Dots.MenuUp {...props} />,
	'menu-down':(props) => <Dots.MenuDown {...props} />,
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
	'auto-fix': (props) => <Auto.AutoFix {...props} />,
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
	plus:(props) => <Add.Add {...props} />,
	close:(props) => <Clear.Clear {...props} />,
	cancel:(props) => <Clear.Cancel {...props} />,
	'calendar-range': (props) => <CalendarRange.Filled {...props} />,
	'calendar-range-outline': (props) => <CalendarRange.Outlined {...props} />,
	 clock: (props) => <Clock.Filled {...props} />,
	'clock-outline': (props) => <Clock.Outlined {...props} />,
	 email: (props) => <Email.Filled {...props} />,
	'email-outline': (props) => <Email.Outlined {...props} />,
	 city: (props) => <City.City {...props} />,
	 phone:(props) => <Phone.Phone {...props} />,
	 'arrow-left':(props) => <Arrow.Left {...props} />,
	 'arrow-right':(props) => <Arrow.Right {...props} />,
	 tag:(props) => <Tag.Tag {...props} />,
	 'checkbox-blank-circle-outline':(props) =>  <Checkbox.Outlined {...props} />,
	 'checkbox-blank-circle':(props) => <Checkbox.Filled {...props} />,
	 'checkbox-marked-circle-outline': (props) => <Checkbox.CheckBoxCircle {...props} />,
	 'minus-circle-outline':(props) => <Minus.MinusCircleOutline {...props} />,
	 minus:(props) => <Minus.Minus {...props} />,
	 'minus-box':(props) => <Minus.MinusBox {...props} />,
	 'minus-box-outline':(props) => <Minus.MinusBoxOutline {...props} />,
	 'minus-circle':(props) => <Minus.MinusCircle {...props} />,
	 'content-copy':(props) => <ContentCopy.ContentCopy {...props} />,
	 'delete-outline':(props) => <Delete.Outlined {...props} />,
	 delete:(props) => <Delete.Filled {...props} />,
	 'currency-usd':(props) => <Currency.Currency {...props} />,
	 alarm:(props) => <Alarm.Alarm {...props} />,
	 download:(props) => <Download.Download {...props} />,
	 'ticket-account': (props) => <TicketAccount.TicketAccount {...props} />,
	'human-male':(props) => <HumanMale.HumanMale {...props} />,
	'calendar-today':(props) => <CalendarToday.CalendarToday {...props} />,
	'package-down':(props) => <Packages.Package {...props} />,
	'open-in-new':(props) => <Open.Open {...props} />,
};
const Icon = (props) => {
	return IconList[props.name] ? IconList[props.name](props) : IconList['blur'](props);
};

export default Icon;
