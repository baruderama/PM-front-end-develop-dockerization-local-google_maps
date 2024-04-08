/**
 *
 * @returns
 */
function ListIcons({ onIconSelect }) {
  const handleIconClick = (title) => {
    onIconSelect(title);
  };
  return (
    <>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        title="ion-alert"
        onClick={() => handleIconClick("ion-alert")}
      >
        <i className="ion-alert"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        title="ion-alert-circled"
        onClick={() => handleIconClick("ion-alert-circled")}
      >
        <i className="ion-alert-circled"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-add")}
        title="ion-android-add"
      >
        <i className="ion-android-add"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-add-circle")}
        title="ion-android-add-circle"
      >
        <i className="ion-android-add-circle"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-alarm-clock")}
        title="ion-android-alarm-clock"
      >
        <i className="ion-android-alarm-clock"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-alert")}
        title="ion-android-alert"
      >
        <i className="ion-android-alert"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-apps")}
        title="ion-android-apps"
      >
        <i className="ion-android-apps"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-archive")}
        title="ion-android-archive"
      >
        <i className="ion-android-archive"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-arrow-back")}
        title="ion-android-arrow-back"
      >
        <i className="ion-android-arrow-back"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-arrow-down")}
        title="ion-android-arrow-down"
      >
        <i className="ion-android-arrow-down"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-arrow-dropdown")}
        title="ion-android-arrow-dropdown"
      >
        <i className="ion-android-arrow-dropdown"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-arrow-dropdown-circle")}
        title="ion-android-arrow-dropdown-circle"
      >
        <i className="ion-android-arrow-dropdown-circle"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-arrow-dropleft")}
        title="ion-android-arrow-dropleft"
      >
        <i className="ion-android-arrow-dropleft"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-arrow-dropleft-circle")}
        title="ion-android-arrow-dropleft-circle"
      >
        <i className="ion-android-arrow-dropleft-circle"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-arrow-dropright")}
        title="ion-android-arrow-dropright"
      >
        <i className="ion-android-arrow-dropright"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-arrow-dropright-circle")}
        title="ion-android-arrow-dropright-circle"
      >
        <i className="ion-android-arrow-dropright-circle"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-arrow-dropup")}
        title="ion-android-arrow-dropup"
      >
        <i className="ion-android-arrow-dropup"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-arrow-dropup-circle")}
        title="ion-android-arrow-dropup-circle"
      >
        <i className="ion-android-arrow-dropup-circle"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-arrow-forward")}
        title="ion-android-arrow-forward"
      >
        <i className="ion-android-arrow-forward"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-arrow-up")}
        title="ion-android-arrow-up"
      >
        <i className="ion-android-arrow-up"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-attach")}
        title="ion-android-attach"
      >
        <i className="ion-android-attach"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-bar")}
        title="ion-android-bar"
      >
        <i className="ion-android-bar"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-bicycle")}
        title="ion-android-bicycle"
      >
        <i className="ion-android-bicycle"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-boat")}
        title="ion-android-boat"
      >
        <i className="ion-android-boat"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-bookmark")}
        title="ion-android-bookmark"
      >
        <i className="ion-android-bookmark"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-bulb")}
        title="ion-android-bulb"
      >
        <i className="ion-android-bulb"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-bus")}
        title="ion-android-bus"
      >
        <i className="ion-android-bus"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-calendar")}
        title="ion-android-calendar"
      >
        <i className="ion-android-calendar"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-call")}
        title="ion-android-call"
      >
        <i className="ion-android-call"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-camera")}
        title="ion-android-camera"
      >
        <i className="ion-android-camera"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-cancel")}
        title="ion-android-cancel"
      >
        <i className="ion-android-cancel"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-car")}
        title="ion-android-car"
      >
        <i className="ion-android-car"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-cart")}
        title="ion-android-cart"
      >
        <i className="ion-android-cart"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-chat")}
        title="ion-android-chat"
      >
        <i className="ion-android-chat"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-checkbox")}
        title="ion-android-checkbox"
      >
        <i className="ion-android-checkbox"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-checkbox-blank")}
        title="ion-android-checkbox-blank"
      >
        <i className="ion-android-checkbox-blank"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-checkbox-outline")}
        title="ion-android-checkbox-outline"
      >
        <i className="ion-android-checkbox-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-checkbox-outline-blank")}
        title="ion-android-checkbox-outline-blank"
      >
        <i className="ion-android-checkbox-outline-blank"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-checkmark-circle")}
        title="ion-android-checkmark-circle"
      >
        <i className="ion-android-checkmark-circle"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-clipboard")}
        title="ion-android-clipboard"
      >
        <i className="ion-android-clipboard"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-close")}
        title="ion-android-close"
      >
        <i className="ion-android-close"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-cloud")}
        title="ion-android-cloud"
      >
        <i className="ion-android-cloud"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-cloud-circle")}
        title="ion-android-cloud-circle"
      >
        <i className="ion-android-cloud-circle"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-cloud-done")}
        title="ion-android-cloud-done"
      >
        <i className="ion-android-cloud-done"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-cloud-outline")}
        title="ion-android-cloud-outline"
      >
        <i className="ion-android-cloud-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-color-palette")}
        title="ion-android-color-palette"
      >
        <i className="ion-android-color-palette"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-compass")}
        title="ion-android-compass"
      >
        <i className="ion-android-compass"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-contact")}
        title="ion-android-contact"
      >
        <i className="ion-android-contact"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-contacts")}
        title="ion-android-contacts"
      >
        <i className="ion-android-contacts"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-contract")}
        title="ion-android-contract"
      >
        <i className="ion-android-contract"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-create")}
        title="ion-android-create"
      >
        <i className="ion-android-create"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-delete")}
        title="ion-android-delete"
      >
        <i className="ion-android-delete"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-desktop")}
        title="ion-android-desktop"
      >
        <i className="ion-android-desktop"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-document")}
        title="ion-android-document"
      >
        <i className="ion-android-document"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-done")}
        title="ion-android-done"
      >
        <i className="ion-android-done"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-done-all")}
        title="ion-android-done-all"
      >
        <i className="ion-android-done-all"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-download")}
        title="ion-android-download"
      >
        <i className="ion-android-download"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-drafts")}
        title="ion-android-drafts"
      >
        <i className="ion-android-drafts"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-exit")}
        title="ion-android-exit"
      >
        <i className="ion-android-exit"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-expand")}
        title="ion-android-expand"
      >
        <i className="ion-android-expand"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-favorite")}
        title="ion-android-favorite"
      >
        <i className="ion-android-favorite"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-favorite-outline")}
        title="ion-android-favorite-outline"
      >
        <i className="ion-android-favorite-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-film")}
        title="ion-android-film"
      >
        <i className="ion-android-film"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-folder")}
        title="ion-android-folder"
      >
        <i className="ion-android-folder"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-folder-open")}
        title="ion-android-folder-open"
      >
        <i className="ion-android-folder-open"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-funnel")}
        title="ion-android-funnel"
      >
        <i className="ion-android-funnel"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-globe")}
        title="ion-android-globe"
      >
        <i className="ion-android-globe"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-hand")}
        title="ion-android-hand"
      >
        <i className="ion-android-hand"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-hangout")}
        title="ion-android-hangout"
      >
        <i className="ion-android-hangout"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-happy")}
        title="ion-android-happy"
      >
        <i className="ion-android-happy"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-home")}
        title="ion-android-home"
      >
        <i className="ion-android-home"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-image")}
        title="ion-android-image"
      >
        <i className="ion-android-image"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-laptop")}
        title="ion-android-laptop"
      >
        <i className="ion-android-laptop"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-list")}
        title="ion-android-list"
      >
        <i className="ion-android-list"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-locate")}
        title="ion-android-locate"
      >
        <i className="ion-android-locate"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-lock")}
        title="ion-android-lock"
      >
        <i className="ion-android-lock"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-mail")}
        title="ion-android-mail"
      >
        <i className="ion-android-mail"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-map")}
        title="ion-android-map"
      >
        <i className="ion-android-map"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-menu")}
        title="ion-android-menu"
      >
        <i className="ion-android-menu"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-microphone")}
        title="ion-android-microphone"
      >
        <i className="ion-android-microphone"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-microphone-off")}
        title="ion-android-microphone-off"
      >
        <i className="ion-android-microphone-off"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-more-horizontal")}
        title="ion-android-more-horizontal"
      >
        <i className="ion-android-more-horizontal"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-more-vertical")}
        title="ion-android-more-vertical"
      >
        <i className="ion-android-more-vertical"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-navigate")}
        title="ion-android-navigate"
      >
        <i className="ion-android-navigate"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-notifications")}
        title="ion-android-notifications"
      >
        <i className="ion-android-notifications"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-notifications-none")}
        title="ion-android-notifications-none"
      >
        <i className="ion-android-notifications-none"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-notifications-off")}
        title="ion-android-notifications-off"
      >
        <i className="ion-android-notifications-off"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-open")}
        title="ion-android-open"
      >
        <i className="ion-android-open"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-options")}
        title="ion-android-options"
      >
        <i className="ion-android-options"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-people")}
        title="ion-android-people"
      >
        <i className="ion-android-people"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-person")}
        title="ion-android-person"
      >
        <i className="ion-android-person"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-person-add")}
        title="ion-android-person-add"
      >
        <i className="ion-android-person-add"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-phone-landscape")}
        title="ion-android-phone-landscape"
      >
        <i className="ion-android-phone-landscape"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-phone-portrait")}
        title="ion-android-phone-portrait"
      >
        <i className="ion-android-phone-portrait"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-pin")}
        title="ion-android-pin"
      >
        <i className="ion-android-pin"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-plane")}
        title="ion-android-plane"
      >
        <i className="ion-android-plane"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-playstore")}
        title="ion-android-playstore"
      >
        <i className="ion-android-playstore"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-print")}
        title="ion-android-print"
      >
        <i className="ion-android-print"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-radio-button-off")}
        title="ion-android-radio-button-off"
      >
        <i className="ion-android-radio-button-off"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-radio-button-on")}
        title="ion-android-radio-button-on"
      >
        <i className="ion-android-radio-button-on"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-refresh")}
        title="ion-android-refresh"
      >
        <i className="ion-android-refresh"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-remove")}
        title="ion-android-remove"
      >
        <i className="ion-android-remove"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-remove-circle")}
        title="ion-android-remove-circle"
      >
        <i className="ion-android-remove-circle"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-restaurant")}
        title="ion-android-restaurant"
      >
        <i className="ion-android-restaurant"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-sad")}
        title="ion-android-sad"
      >
        <i className="ion-android-sad"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-search")}
        title="ion-android-search"
      >
        <i className="ion-android-search"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-send")}
        title="ion-android-send"
      >
        <i className="ion-android-send"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-settings")}
        title="ion-android-settings"
      >
        <i className="ion-android-settings"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-share")}
        title="ion-android-share"
      >
        <i className="ion-android-share"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-share-alt")}
        title="ion-android-share-alt"
      >
        <i className="ion-android-share-alt"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-star")}
        title="ion-android-star"
      >
        <i className="ion-android-star"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-star-half")}
        title="ion-android-star-half"
      >
        <i className="ion-android-star-half"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-star-outline")}
        title="ion-android-star-outline"
      >
        <i className="ion-android-star-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-stopwatch")}
        title="ion-android-stopwatch"
      >
        <i className="ion-android-stopwatch"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-subway")}
        title="ion-android-subway"
      >
        <i className="ion-android-subway"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-sunny")}
        title="ion-android-sunny"
      >
        <i className="ion-android-sunny"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-sync")}
        title="ion-android-sync"
      >
        <i className="ion-android-sync"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-textsms")}
        title="ion-android-textsms"
      >
        <i className="ion-android-textsms"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-time")}
        title="ion-android-time"
      >
        <i className="ion-android-time"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-train")}
        title="ion-android-train"
      >
        <i className="ion-android-train"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-unlock")}
        title="ion-android-unlock"
      >
        <i className="ion-android-unlock"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-upload")}
        title="ion-android-upload"
      >
        <i className="ion-android-upload"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-volume-down")}
        title="ion-android-volume-down"
      >
        <i className="ion-android-volume-down"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-volume-mute")}
        title="ion-android-volume-mute"
      >
        <i className="ion-android-volume-mute"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-volume-off")}
        title="ion-android-volume-off"
      >
        <i className="ion-android-volume-off"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-volume-up")}
        title="ion-android-volume-up"
      >
        <i className="ion-android-volume-up"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-walk")}
        title="ion-android-walk"
      >
        <i className="ion-android-walk"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-warning")}
        title="ion-android-warning"
      >
        <i className="ion-android-warning"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-watch")}
        title="ion-android-watch"
      >
        <i className="ion-android-watch"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-android-wifi")}
        title="ion-android-wifi"
      >
        <i className="ion-android-wifi"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-aperture")}
        title="ion-aperture"
      >
        <i className="ion-aperture"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-archive")}
        title="ion-archive"
      >
        <i className="ion-archive"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-down-a")}
        title="ion-arrow-down-a"
      >
        <i className="ion-arrow-down-a"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-down-b")}
        title="ion-arrow-down-b"
      >
        <i className="ion-arrow-down-b"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-down-c")}
        title="ion-arrow-down-c"
      >
        <i className="ion-arrow-down-c"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-expand")}
        title="ion-arrow-expand"
      >
        <i className="ion-arrow-expand"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-graph-down-left")}
        title="ion-arrow-graph-down-left"
      >
        <i className="ion-arrow-graph-down-left"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-graph-down-right")}
        title="ion-arrow-graph-down-right"
      >
        <i className="ion-arrow-graph-down-right"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-graph-up-left")}
        title="ion-arrow-graph-up-left"
      >
        <i className="ion-arrow-graph-up-left"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-graph-up-right")}
        title="ion-arrow-graph-up-right"
      >
        <i className="ion-arrow-graph-up-right"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-left-a")}
        title="ion-arrow-left-a"
      >
        <i className="ion-arrow-left-a"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-left-b")}
        title="ion-arrow-left-b"
      >
        <i className="ion-arrow-left-b"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-left-c")}
        title="ion-arrow-left-c"
      >
        <i className="ion-arrow-left-c"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-move")}
        title="ion-arrow-move"
      >
        <i className="ion-arrow-move"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-resize")}
        title="ion-arrow-resize"
      >
        <i className="ion-arrow-resize"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-return-left")}
        title="ion-arrow-return-left"
      >
        <i className="ion-arrow-return-left"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-return-right")}
        title="ion-arrow-return-right"
      >
        <i className="ion-arrow-return-right"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-right-a")}
        title="ion-arrow-right-a"
      >
        <i className="ion-arrow-right-a"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-right-b")}
        title="ion-arrow-right-b"
      >
        <i className="ion-arrow-right-b"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-right-c")}
        title="ion-arrow-right-c"
      >
        <i className="ion-arrow-right-c"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-shrink")}
        title="ion-arrow-shrink"
      >
        <i className="ion-arrow-shrink"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-swap")}
        title="ion-arrow-swap"
      >
        <i className="ion-arrow-swap"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-up-a")}
        title="ion-arrow-up-a"
      >
        <i className="ion-arrow-up-a"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-up-b")}
        title="ion-arrow-up-b"
      >
        <i className="ion-arrow-up-b"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-arrow-up-c")}
        title="ion-arrow-up-c"
      >
        <i className="ion-arrow-up-c"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-asterisk")}
        title="ion-asterisk"
      >
        <i className="ion-asterisk"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-at")}
        title="ion-at"
      >
        <i className="ion-at"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-backspace")}
        title="ion-backspace"
      >
        <i className="ion-backspace"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-backspace-outline")}
        title="ion-backspace-outline"
      >
        <i className="ion-backspace-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-bag")}
        title="ion-bag"
      >
        <i className="ion-bag"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-battery-charging")}
        title="ion-battery-charging"
      >
        <i className="ion-battery-charging"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-battery-empty")}
        title="ion-battery-empty"
      >
        <i className="ion-battery-empty"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-battery-full")}
        title="ion-battery-full"
      >
        <i className="ion-battery-full"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-battery-half")}
        title="ion-battery-half"
      >
        <i className="ion-battery-half"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-battery-low")}
        title="ion-battery-low"
      >
        <i className="ion-battery-low"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-beaker")}
        title="ion-beaker"
      >
        <i className="ion-beaker"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-beer")}
        title="ion-beer"
      >
        <i className="ion-beer"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-bluetooth")}
        title="ion-bluetooth"
      >
        <i className="ion-bluetooth"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-bonfire")}
        title="ion-bonfire"
      >
        <i className="ion-bonfire"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-bookmark")}
        title="ion-bookmark"
      >
        <i className="ion-bookmark"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-bowtie")}
        title="ion-bowtie"
      >
        <i className="ion-bowtie"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-briefcase")}
        title="ion-briefcase"
      >
        <i className="ion-briefcase"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-bug")}
        title="ion-bug"
      >
        <i className="ion-bug"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-calculator")}
        title="ion-calculator"
      >
        <i className="ion-calculator"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-calendar")}
        title="ion-calendar"
      >
        <i className="ion-calendar"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-camera")}
        title="ion-camera"
      >
        <i className="ion-camera"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-card")}
        title="ion-card"
      >
        <i className="ion-card"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-cash")}
        title="ion-cash"
      >
        <i className="ion-cash"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-chatbox")}
        title="ion-chatbox"
      >
        <i className="ion-chatbox"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-chatbox-working")}
        title="ion-chatbox-working"
      >
        <i className="ion-chatbox-working"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-chatboxes")}
        title="ion-chatboxes"
      >
        <i className="ion-chatboxes"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-chatbubble")}
        title="ion-chatbubble"
      >
        <i className="ion-chatbubble"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-chatbubble-working")}
        title="ion-chatbubble-working"
      >
        <i className="ion-chatbubble-working"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-chatbubbles")}
        title="ion-chatbubbles"
      >
        <i className="ion-chatbubbles"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-checkmark")}
        title="ion-checkmark"
      >
        <i className="ion-checkmark"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-checkmark-circled")}
        title="ion-checkmark-circled"
      >
        <i className="ion-checkmark-circled"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-checkmark-round")}
        title="ion-checkmark-round"
      >
        <i className="ion-checkmark-round"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-chevron-down")}
        title="ion-chevron-down"
      >
        <i className="ion-chevron-down"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-chevron-left")}
        title="ion-chevron-left"
      >
        <i className="ion-chevron-left"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-chevron-right")}
        title="ion-chevron-right"
      >
        <i className="ion-chevron-right"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-chevron-up")}
        title="ion-chevron-up"
      >
        <i className="ion-chevron-up"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-clipboard")}
        title="ion-clipboard"
      >
        <i className="ion-clipboard"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-clock")}
        title="ion-clock"
      >
        <i className="ion-clock"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-close")}
        title="ion-close"
      >
        <i className="ion-close"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-close-circled")}
        title="ion-close-circled"
      >
        <i className="ion-close-circled"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-close-round")}
        title="ion-close-round"
      >
        <i className="ion-close-round"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-closed-captioning")}
        title="ion-closed-captioning"
      >
        <i className="ion-closed-captioning"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-cloud")}
        title="ion-cloud"
      >
        <i className="ion-cloud"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-code")}
        title="ion-code"
      >
        <i className="ion-code"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-code-download")}
        title="ion-code-download"
      >
        <i className="ion-code-download"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-code-working")}
        title="ion-code-working"
      >
        <i className="ion-code-working"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-coffee")}
        title="ion-coffee"
      >
        <i className="ion-coffee"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-compass")}
        title="ion-compass"
      >
        <i className="ion-compass"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-compose")}
        title="ion-compose"
      >
        <i className="ion-compose"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-connection-bars")}
        title="ion-connection-bars"
      >
        <i className="ion-connection-bars"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-contrast")}
        title="ion-contrast"
      >
        <i className="ion-contrast"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-crop")}
        title="ion-crop"
      >
        <i className="ion-crop"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-cube")}
        title="ion-cube"
      >
        <i className="ion-cube"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-disc")}
        title="ion-disc"
      >
        <i className="ion-disc"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-document")}
        title="ion-document"
      >
        <i className="ion-document"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-document-text")}
        title="ion-document-text"
      >
        <i className="ion-document-text"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-drag")}
        title="ion-drag"
      >
        <i className="ion-drag"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-earth")}
        title="ion-earth"
      >
        <i className="ion-earth"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-easel")}
        title="ion-easel"
      >
        <i className="ion-easel"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-edit")}
        title="ion-edit"
      >
        <i className="ion-edit"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-egg")}
        title="ion-egg"
      >
        <i className="ion-egg"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-eject")}
        title="ion-eject"
      >
        <i className="ion-eject"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-email")}
        title="ion-email"
      >
        <i className="ion-email"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-email-unread")}
        title="ion-email-unread"
      >
        <i className="ion-email-unread"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-erlenmeyer-flask")}
        title="ion-erlenmeyer-flask"
      >
        <i className="ion-erlenmeyer-flask"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-erlenmeyer-flask-bubbles")}
        title="ion-erlenmeyer-flask-bubbles"
      >
        <i className="ion-erlenmeyer-flask-bubbles"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-eye")}
        title="ion-eye"
      >
        <i className="ion-eye"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-eye-disabled")}
        title="ion-eye-disabled"
      >
        <i className="ion-eye-disabled"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-female")}
        title="ion-female"
      >
        <i className="ion-female"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-filing")}
        title="ion-filing"
      >
        <i className="ion-filing"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-film-marker")}
        title="ion-film-marker"
      >
        <i className="ion-film-marker"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-fireball")}
        title="ion-fireball"
      >
        <i className="ion-fireball"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-flag")}
        title="ion-flag"
      >
        <i className="ion-flag"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-flame")}
        title="ion-flame"
      >
        <i className="ion-flame"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-flash")}
        title="ion-flash"
      >
        <i className="ion-flash"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-flash-off")}
        title="ion-flash-off"
      >
        <i className="ion-flash-off"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-folder")}
        title="ion-folder"
      >
        <i className="ion-folder"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-fork")}
        title="ion-fork"
      >
        <i className="ion-fork"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-fork-repo")}
        title="ion-fork-repo"
      >
        <i className="ion-fork-repo"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-forward")}
        title="ion-forward"
      >
        <i className="ion-forward"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-funnel")}
        title="ion-funnel"
      >
        <i className="ion-funnel"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-gear-a")}
        title="ion-gear-a"
      >
        <i className="ion-gear-a"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-gear-b")}
        title="ion-gear-b"
      >
        <i className="ion-gear-b"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-grid")}
        title="ion-grid"
      >
        <i className="ion-grid"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-hammer")}
        title="ion-hammer"
      >
        <i className="ion-hammer"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-happy")}
        title="ion-happy"
      >
        <i className="ion-happy"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-happy-outline")}
        title="ion-happy-outline"
      >
        <i className="ion-happy-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-headphone")}
        title="ion-headphone"
      >
        <i className="ion-headphone"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-heart")}
        title="ion-heart"
      >
        <i className="ion-heart"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-heart-broken")}
        title="ion-heart-broken"
      >
        <i className="ion-heart-broken"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-help")}
        title="ion-help"
      >
        <i className="ion-help"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-help-buoy")}
        title="ion-help-buoy"
      >
        <i className="ion-help-buoy"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-help-circled")}
        title="ion-help-circled"
      >
        <i className="ion-help-circled"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-home")}
        title="ion-home"
      >
        <i className="ion-home"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-icecream")}
        title="ion-icecream"
      >
        <i className="ion-icecream"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-image")}
        title="ion-image"
      >
        <i className="ion-image"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-images")}
        title="ion-images"
      >
        <i className="ion-images"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-information")}
        title="ion-information"
      >
        <i className="ion-information"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-information-circled")}
        title="ion-information-circled"
      >
        <i className="ion-information-circled"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ionic")}
        title="ion-ionic"
      >
        <i className="ion-ionic"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-alarm")}
        title="ion-ios-alarm"
      >
        <i className="ion-ios-alarm"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-alarm-outline")}
        title="ion-ios-alarm-outline"
      >
        <i className="ion-ios-alarm-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-albums")}
        title="ion-ios-albums"
      >
        <i className="ion-ios-albums"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-albums-outline")}
        title="ion-ios-albums-outline"
      >
        <i className="ion-ios-albums-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-americanfootball")}
        title="ion-ios-americanfootball"
      >
        <i className="ion-ios-americanfootball"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-americanfootball-outline")}
        title="ion-ios-americanfootball-outline"
      >
        <i className="ion-ios-americanfootball-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-analytics")}
        title="ion-ios-analytics"
      >
        <i className="ion-ios-analytics"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-analytics-outline")}
        title="ion-ios-analytics-outline"
      >
        <i className="ion-ios-analytics-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-arrow-back")}
        title="ion-ios-arrow-back"
      >
        <i className="ion-ios-arrow-back"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-arrow-down")}
        title="ion-ios-arrow-down"
      >
        <i className="ion-ios-arrow-down"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-arrow-forward")}
        title="ion-ios-arrow-forward"
      >
        <i className="ion-ios-arrow-forward"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-arrow-left")}
        title="ion-ios-arrow-left"
      >
        <i className="ion-ios-arrow-left"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-arrow-right")}
        title="ion-ios-arrow-right"
      >
        <i className="ion-ios-arrow-right"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-arrow-thin-down")}
        title="ion-ios-arrow-thin-down"
      >
        <i className="ion-ios-arrow-thin-down"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-arrow-thin-left")}
        title="ion-ios-arrow-thin-left"
      >
        <i className="ion-ios-arrow-thin-left"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-arrow-thin-right")}
        title="ion-ios-arrow-thin-right"
      >
        <i className="ion-ios-arrow-thin-right"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-arrow-thin-up")}
        title="ion-ios-arrow-thin-up"
      >
        <i className="ion-ios-arrow-thin-up"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-arrow-up")}
        title="ion-ios-arrow-up"
      >
        <i className="ion-ios-arrow-up"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-at")}
        title="ion-ios-at"
      >
        <i className="ion-ios-at"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-at-outline")}
        title="ion-ios-at-outline"
      >
        <i className="ion-ios-at-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-barcode")}
        title="ion-ios-barcode"
      >
        <i className="ion-ios-barcode"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-barcode-outline")}
        title="ion-ios-barcode-outline"
      >
        <i className="ion-ios-barcode-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-baseball")}
        title="ion-ios-baseball"
      >
        <i className="ion-ios-baseball"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-baseball-outline")}
        title="ion-ios-baseball-outline"
      >
        <i className="ion-ios-baseball-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-basketball")}
        title="ion-ios-basketball"
      >
        <i className="ion-ios-basketball"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-basketball-outline")}
        title="ion-ios-basketball-outline"
      >
        <i className="ion-ios-basketball-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-bell")}
        title="ion-ios-bell"
      >
        <i className="ion-ios-bell"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-bell-outline")}
        title="ion-ios-bell-outline"
      >
        <i className="ion-ios-bell-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-body")}
        title="ion-ios-body"
      >
        <i className="ion-ios-body"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-body-outline")}
        title="ion-ios-body-outline"
      >
        <i className="ion-ios-body-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-bolt")}
        title="ion-ios-bolt"
      >
        <i className="ion-ios-bolt"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-bolt-outline")}
        title="ion-ios-bolt-outline"
      >
        <i className="ion-ios-bolt-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-book")}
        title="ion-ios-book"
      >
        <i className="ion-ios-book"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-book-outline")}
        title="ion-ios-book-outline"
      >
        <i className="ion-ios-book-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-bookmarks")}
        title="ion-ios-bookmarks"
      >
        <i className="ion-ios-bookmarks"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-bookmarks-outline")}
        title="ion-ios-bookmarks-outline"
      >
        <i className="ion-ios-bookmarks-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-box")}
        title="ion-ios-box"
      >
        <i className="ion-ios-box"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-box-outline")}
        title="ion-ios-box-outline"
      >
        <i className="ion-ios-box-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-briefcase")}
        title="ion-ios-briefcase"
      >
        <i className="ion-ios-briefcase"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-briefcase-outline")}
        title="ion-ios-briefcase-outline"
      >
        <i className="ion-ios-briefcase-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-browsers")}
        title="ion-ios-browsers"
      >
        <i className="ion-ios-browsers"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-browsers-outline")}
        title="ion-ios-browsers-outline"
      >
        <i className="ion-ios-browsers-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-calculator")}
        title="ion-ios-calculator"
      >
        <i className="ion-ios-calculator"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-calculator-outline")}
        title="ion-ios-calculator-outline"
      >
        <i className="ion-ios-calculator-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-calendar")}
        title="ion-ios-calendar"
      >
        <i className="ion-ios-calendar"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-calendar-outline")}
        title="ion-ios-calendar-outline"
      >
        <i className="ion-ios-calendar-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-camera")}
        title="ion-ios-camera"
      >
        <i className="ion-ios-camera"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-camera-outline")}
        title="ion-ios-camera-outline"
      >
        <i className="ion-ios-camera-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-cart")}
        title="ion-ios-cart"
      >
        <i className="ion-ios-cart"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-cart-outline")}
        title="ion-ios-cart-outline"
      >
        <i className="ion-ios-cart-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-chatboxes")}
        title="ion-ios-chatboxes"
      >
        <i className="ion-ios-chatboxes"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-chatboxes-outline")}
        title="ion-ios-chatboxes-outline"
      >
        <i className="ion-ios-chatboxes-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-chatbubble")}
        title="ion-ios-chatbubble"
      >
        <i className="ion-ios-chatbubble"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-chatbubble-outline")}
        title="ion-ios-chatbubble-outline"
      >
        <i className="ion-ios-chatbubble-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-checkmark")}
        title="ion-ios-checkmark"
      >
        <i className="ion-ios-checkmark"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-checkmark-empty")}
        title="ion-ios-checkmark-empty"
      >
        <i className="ion-ios-checkmark-empty"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-checkmark-outline")}
        title="ion-ios-checkmark-outline"
      >
        <i className="ion-ios-checkmark-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-circle-filled")}
        title="ion-ios-circle-filled"
      >
        <i className="ion-ios-circle-filled"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-circle-outline")}
        title="ion-ios-circle-outline"
      >
        <i className="ion-ios-circle-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-clock")}
        title="ion-ios-clock"
      >
        <i className="ion-ios-clock"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-clock-outline")}
        title="ion-ios-clock-outline"
      >
        <i className="ion-ios-clock-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-close")}
        title="ion-ios-close"
      >
        <i className="ion-ios-close"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-close-empty")}
        title="ion-ios-close-empty"
      >
        <i className="ion-ios-close-empty"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-close-outline")}
        title="ion-ios-close-outline"
      >
        <i className="ion-ios-close-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-cloud")}
        title="ion-ios-cloud"
      >
        <i className="ion-ios-cloud"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-cloud-download")}
        title="ion-ios-cloud-download"
      >
        <i className="ion-ios-cloud-download"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-cloud-download-outline")}
        title="ion-ios-cloud-download-outline"
      >
        <i className="ion-ios-cloud-download-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-cloud-outline")}
        title="ion-ios-cloud-outline"
      >
        <i className="ion-ios-cloud-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-cloud-upload")}
        title="ion-ios-cloud-upload"
      >
        <i className="ion-ios-cloud-upload"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-cloud-upload-outline")}
        title="ion-ios-cloud-upload-outline"
      >
        <i className="ion-ios-cloud-upload-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-cloudy")}
        title="ion-ios-cloudy"
      >
        <i className="ion-ios-cloudy"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-cloudy-night")}
        title="ion-ios-cloudy-night"
      >
        <i className="ion-ios-cloudy-night"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-cloudy-night-outline")}
        title="ion-ios-cloudy-night-outline"
      >
        <i className="ion-ios-cloudy-night-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-cloudy-outline")}
        title="ion-ios-cloudy-outline"
      >
        <i className="ion-ios-cloudy-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-cog")}
        title="ion-ios-cog"
      >
        <i className="ion-ios-cog"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-cog-outline")}
        title="ion-ios-cog-outline"
      >
        <i className="ion-ios-cog-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-color-filter")}
        title="ion-ios-color-filter"
      >
        <i className="ion-ios-color-filter"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-color-filter-outline")}
        title="ion-ios-color-filter-outline"
      >
        <i className="ion-ios-color-filter-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-color-wand")}
        title="ion-ios-color-wand"
      >
        <i className="ion-ios-color-wand"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-color-wand-outline")}
        title="ion-ios-color-wand-outline"
      >
        <i className="ion-ios-color-wand-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-compose")}
        title="ion-ios-compose"
      >
        <i className="ion-ios-compose"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-compose-outline")}
        title="ion-ios-compose-outline"
      >
        <i className="ion-ios-compose-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-contact")}
        title="ion-ios-contact"
      >
        <i className="ion-ios-contact"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-contact-outline")}
        title="ion-ios-contact-outline"
      >
        <i className="ion-ios-contact-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-copy")}
        title="ion-ios-copy"
      >
        <i className="ion-ios-copy"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-copy-outline")}
        title="ion-ios-copy-outline"
      >
        <i className="ion-ios-copy-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-crop")}
        title="ion-ios-crop"
      >
        <i className="ion-ios-crop"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-crop-strong")}
        title="ion-ios-crop-strong"
      >
        <i className="ion-ios-crop-strong"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-download")}
        title="ion-ios-download"
      >
        <i className="ion-ios-download"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-download-outline")}
        title="ion-ios-download-outline"
      >
        <i className="ion-ios-download-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-drag")}
        title="ion-ios-drag"
      >
        <i className="ion-ios-drag"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-email")}
        title="ion-ios-email"
      >
        <i className="ion-ios-email"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-email-outline")}
        title="ion-ios-email-outline"
      >
        <i className="ion-ios-email-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-eye")}
        title="ion-ios-eye"
      >
        <i className="ion-ios-eye"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-eye-outline")}
        title="ion-ios-eye-outline"
      >
        <i className="ion-ios-eye-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-fastforward")}
        title="ion-ios-fastforward"
      >
        <i className="ion-ios-fastforward"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-fastforward-outline")}
        title="ion-ios-fastforward-outline"
      >
        <i className="ion-ios-fastforward-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-filing")}
        title="ion-ios-filing"
      >
        <i className="ion-ios-filing"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-filing-outline")}
        title="ion-ios-filing-outline"
      >
        <i className="ion-ios-filing-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-film")}
        title="ion-ios-film"
      >
        <i className="ion-ios-film"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-film-outline")}
        title="ion-ios-film-outline"
      >
        <i className="ion-ios-film-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-flag")}
        title="ion-ios-flag"
      >
        <i className="ion-ios-flag"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-flag-outline")}
        title="ion-ios-flag-outline"
      >
        <i className="ion-ios-flag-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-flame")}
        title="ion-ios-flame"
      >
        <i className="ion-ios-flame"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-flame-outline")}
        title="ion-ios-flame-outline"
      >
        <i className="ion-ios-flame-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-flask")}
        title="ion-ios-flask"
      >
        <i className="ion-ios-flask"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-flask-outline")}
        title="ion-ios-flask-outline"
      >
        <i className="ion-ios-flask-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-flower")}
        title="ion-ios-flower"
      >
        <i className="ion-ios-flower"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-flower-outline")}
        title="ion-ios-flower-outline"
      >
        <i className="ion-ios-flower-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-folder")}
        title="ion-ios-folder"
      >
        <i className="ion-ios-folder"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-folder-outline")}
        title="ion-ios-folder-outline"
      >
        <i className="ion-ios-folder-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-football")}
        title="ion-ios-football"
      >
        <i className="ion-ios-football"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-football-outline")}
        title="ion-ios-football-outline"
      >
        <i className="ion-ios-football-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-game-controller-a")}
        title="ion-ios-game-controller-a"
      >
        <i className="ion-ios-game-controller-a"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-game-controller-a-outline")}
        title="ion-ios-game-controller-a-outline"
      >
        <i className="ion-ios-game-controller-a-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-game-controller-b")}
        title="ion-ios-game-controller-b"
      >
        <i className="ion-ios-game-controller-b"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-game-controller-b-outline")}
        title="ion-ios-game-controller-b-outline"
      >
        <i className="ion-ios-game-controller-b-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-gear")}
        title="ion-ios-gear"
      >
        <i className="ion-ios-gear"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-gear-outline")}
        title="ion-ios-gear-outline"
      >
        <i className="ion-ios-gear-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-glasses")}
        title="ion-ios-glasses"
      >
        <i className="ion-ios-glasses"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-glasses-outline")}
        title="ion-ios-glasses-outline"
      >
        <i className="ion-ios-glasses-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-grid-view")}
        title="ion-ios-grid-view"
      >
        <i className="ion-ios-grid-view"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-grid-view-outline")}
        title="ion-ios-grid-view-outline"
      >
        <i className="ion-ios-grid-view-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-heart")}
        title="ion-ios-heart"
      >
        <i className="ion-ios-heart"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-heart-outline")}
        title="ion-ios-heart-outline"
      >
        <i className="ion-ios-heart-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-help")}
        title="ion-ios-help"
      >
        <i className="ion-ios-help"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-help-empty")}
        title="ion-ios-help-empty"
      >
        <i className="ion-ios-help-empty"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-help-outline")}
        title="ion-ios-help-outline"
      >
        <i className="ion-ios-help-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-home")}
        title="ion-ios-home"
      >
        <i className="ion-ios-home"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-home-outline")}
        title="ion-ios-home-outline"
      >
        <i className="ion-ios-home-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-infinite")}
        title="ion-ios-infinite"
      >
        <i className="ion-ios-infinite"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-infinite-outline")}
        title="ion-ios-infinite-outline"
      >
        <i className="ion-ios-infinite-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-information")}
        title="ion-ios-information"
      >
        <i className="ion-ios-information"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-information-empty")}
        title="ion-ios-information-empty"
      >
        <i className="ion-ios-information-empty"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-information-outline")}
        title="ion-ios-information-outline"
      >
        <i className="ion-ios-information-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-ionic-outline")}
        title="ion-ios-ionic-outline"
      >
        <i className="ion-ios-ionic-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-keypad")}
        title="ion-ios-keypad"
      >
        <i className="ion-ios-keypad"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-keypad-outline")}
        title="ion-ios-keypad-outline"
      >
        <i className="ion-ios-keypad-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-lightbulb")}
        title="ion-ios-lightbulb"
      >
        <i className="ion-ios-lightbulb"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-lightbulb-outline")}
        title="ion-ios-lightbulb-outline"
      >
        <i className="ion-ios-lightbulb-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-list")}
        title="ion-ios-list"
      >
        <i className="ion-ios-list"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-list-outline")}
        title="ion-ios-list-outline"
      >
        <i className="ion-ios-list-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-location")}
        title="ion-ios-location"
      >
        <i className="ion-ios-location"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-location-outline")}
        title="ion-ios-location-outline"
      >
        <i className="ion-ios-location-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-locked")}
        title="ion-ios-locked"
      >
        <i className="ion-ios-locked"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-locked-outline")}
        title="ion-ios-locked-outline"
      >
        <i className="ion-ios-locked-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-loop")}
        title="ion-ios-loop"
      >
        <i className="ion-ios-loop"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-loop-strong")}
        title="ion-ios-loop-strong"
      >
        <i className="ion-ios-loop-strong"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-medical")}
        title="ion-ios-medical"
      >
        <i className="ion-ios-medical"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-medical-outline")}
        title="ion-ios-medical-outline"
      >
        <i className="ion-ios-medical-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-medkit")}
        title="ion-ios-medkit"
      >
        <i className="ion-ios-medkit"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-medkit-outline")}
        title="ion-ios-medkit-outline"
      >
        <i className="ion-ios-medkit-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-mic")}
        title="ion-ios-mic"
      >
        <i className="ion-ios-mic"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-mic-off")}
        title="ion-ios-mic-off"
      >
        <i className="ion-ios-mic-off"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-mic-outline")}
        title="ion-ios-mic-outline"
      >
        <i className="ion-ios-mic-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-minus")}
        title="ion-ios-minus"
      >
        <i className="ion-ios-minus"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-minus-empty")}
        title="ion-ios-minus-empty"
      >
        <i className="ion-ios-minus-empty"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-minus-outline")}
        title="ion-ios-minus-outline"
      >
        <i className="ion-ios-minus-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-monitor")}
        title="ion-ios-monitor"
      >
        <i className="ion-ios-monitor"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-monitor-outline")}
        title="ion-ios-monitor-outline"
      >
        <i className="ion-ios-monitor-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-moon")}
        title="ion-ios-moon"
      >
        <i className="ion-ios-moon"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-moon-outline")}
        title="ion-ios-moon-outline"
      >
        <i className="ion-ios-moon-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-more")}
        title="ion-ios-more"
      >
        <i className="ion-ios-more"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-more-outline")}
        title="ion-ios-more-outline"
      >
        <i className="ion-ios-more-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-musical-note")}
        title="ion-ios-musical-note"
      >
        <i className="ion-ios-musical-note"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-musical-notes")}
        title="ion-ios-musical-notes"
      >
        <i className="ion-ios-musical-notes"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-navigate")}
        title="ion-ios-navigate"
      >
        <i className="ion-ios-navigate"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-navigate-outline")}
        title="ion-ios-navigate-outline"
      >
        <i className="ion-ios-navigate-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-nutrition")}
        title="ion-ios-nutrition"
      >
        <i className="ion-ios-nutrition"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-nutrition-outline")}
        title="ion-ios-nutrition-outline"
      >
        <i className="ion-ios-nutrition-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-paper")}
        title="ion-ios-paper"
      >
        <i className="ion-ios-paper"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-paper-outline")}
        title="ion-ios-paper-outline"
      >
        <i className="ion-ios-paper-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-paperplane")}
        title="ion-ios-paperplane"
      >
        <i className="ion-ios-paperplane"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-paperplane-outline")}
        title="ion-ios-paperplane-outline"
      >
        <i className="ion-ios-paperplane-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-partlysunny")}
        title="ion-ios-partlysunny"
      >
        <i className="ion-ios-partlysunny"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-partlysunny-outline")}
        title="ion-ios-partlysunny-outline"
      >
        <i className="ion-ios-partlysunny-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-pause")}
        title="ion-ios-pause"
      >
        <i className="ion-ios-pause"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-pause-outline")}
        title="ion-ios-pause-outline"
      >
        <i className="ion-ios-pause-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-paw")}
        title="ion-ios-paw"
      >
        <i className="ion-ios-paw"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-paw-outline")}
        title="ion-ios-paw-outline"
      >
        <i className="ion-ios-paw-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-people")}
        title="ion-ios-people"
      >
        <i className="ion-ios-people"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-people-outline")}
        title="ion-ios-people-outline"
      >
        <i className="ion-ios-people-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-person")}
        title="ion-ios-person"
      >
        <i className="ion-ios-person"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-person-outline")}
        title="ion-ios-person-outline"
      >
        <i className="ion-ios-person-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-personadd")}
        title="ion-ios-personadd"
      >
        <i className="ion-ios-personadd"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-personadd-outline")}
        title="ion-ios-personadd-outline"
      >
        <i className="ion-ios-personadd-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-photos")}
        title="ion-ios-photos"
      >
        <i className="ion-ios-photos"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-photos-outline")}
        title="ion-ios-photos-outline"
      >
        <i className="ion-ios-photos-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-pie")}
        title="ion-ios-pie"
      >
        <i className="ion-ios-pie"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-pie-outline")}
        title="ion-ios-pie-outline"
      >
        <i className="ion-ios-pie-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-pint")}
        title="ion-ios-pint"
      >
        <i className="ion-ios-pint"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-pint-outline")}
        title="ion-ios-pint-outline"
      >
        <i className="ion-ios-pint-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-play")}
        title="ion-ios-play"
      >
        <i className="ion-ios-play"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-play-outline")}
        title="ion-ios-play-outline"
      >
        <i className="ion-ios-play-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-plus")}
        title="ion-ios-plus"
      >
        <i className="ion-ios-plus"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-plus-empty")}
        title="ion-ios-plus-empty"
      >
        <i className="ion-ios-plus-empty"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-plus-outline")}
        title="ion-ios-plus-outline"
      >
        <i className="ion-ios-plus-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-pricetag")}
        title="ion-ios-pricetag"
      >
        <i className="ion-ios-pricetag"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-pricetag-outline")}
        title="ion-ios-pricetag-outline"
      >
        <i className="ion-ios-pricetag-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-pricetags")}
        title="ion-ios-pricetags"
      >
        <i className="ion-ios-pricetags"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-pricetags-outline")}
        title="ion-ios-pricetags-outline"
      >
        <i className="ion-ios-pricetags-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-printer")}
        title="ion-ios-printer"
      >
        <i className="ion-ios-printer"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-printer-outline")}
        title="ion-ios-printer-outline"
      >
        <i className="ion-ios-printer-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-pulse")}
        title="ion-ios-pulse"
      >
        <i className="ion-ios-pulse"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-pulse-strong")}
        title="ion-ios-pulse-strong"
      >
        <i className="ion-ios-pulse-strong"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-rainy")}
        title="ion-ios-rainy"
      >
        <i className="ion-ios-rainy"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-rainy-outline")}
        title="ion-ios-rainy-outline"
      >
        <i className="ion-ios-rainy-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-recording")}
        title="ion-ios-recording"
      >
        <i className="ion-ios-recording"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-recording-outline")}
        title="ion-ios-recording-outline"
      >
        <i className="ion-ios-recording-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-redo")}
        title="ion-ios-redo"
      >
        <i className="ion-ios-redo"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-redo-outline")}
        title="ion-ios-redo-outline"
      >
        <i className="ion-ios-redo-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-refresh")}
        title="ion-ios-refresh"
      >
        <i className="ion-ios-refresh"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-refresh-empty")}
        title="ion-ios-refresh-empty"
      >
        <i className="ion-ios-refresh-empty"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-refresh-outline")}
        title="ion-ios-refresh-outline"
      >
        <i className="ion-ios-refresh-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-reload")}
        title="ion-ios-reload"
      >
        <i className="ion-ios-reload"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-reverse-camera")}
        title="ion-ios-reverse-camera"
      >
        <i className="ion-ios-reverse-camera"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-reverse-camera-outline")}
        title="ion-ios-reverse-camera-outline"
      >
        <i className="ion-ios-reverse-camera-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-rewind")}
        title="ion-ios-rewind"
      >
        <i className="ion-ios-rewind"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-rewind-outline")}
        title="ion-ios-rewind-outline"
      >
        <i className="ion-ios-rewind-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-rose")}
        title="ion-ios-rose"
      >
        <i className="ion-ios-rose"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-rose-outline")}
        title="ion-ios-rose-outline"
      >
        <i className="ion-ios-rose-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-search")}
        title="ion-ios-search"
      >
        <i className="ion-ios-search"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-search-strong")}
        title="ion-ios-search-strong"
      >
        <i className="ion-ios-search-strong"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-settings")}
        title="ion-ios-settings"
      >
        <i className="ion-ios-settings"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-settings-strong")}
        title="ion-ios-settings-strong"
      >
        <i className="ion-ios-settings-strong"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-shuffle")}
        title="ion-ios-shuffle"
      >
        <i className="ion-ios-shuffle"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-shuffle-strong")}
        title="ion-ios-shuffle-strong"
      >
        <i className="ion-ios-shuffle-strong"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-skipbackward")}
        title="ion-ios-skipbackward"
      >
        <i className="ion-ios-skipbackward"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-skipbackward-outline")}
        title="ion-ios-skipbackward-outline"
      >
        <i className="ion-ios-skipbackward-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-skipforward")}
        title="ion-ios-skipforward"
      >
        <i className="ion-ios-skipforward"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-skipforward-outline")}
        title="ion-ios-skipforward-outline"
      >
        <i className="ion-ios-skipforward-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-snowy")}
        title="ion-ios-snowy"
      >
        <i className="ion-ios-snowy"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-speedometer")}
        title="ion-ios-speedometer"
      >
        <i className="ion-ios-speedometer"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-speedometer-outline")}
        title="ion-ios-speedometer-outline"
      >
        <i className="ion-ios-speedometer-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-star")}
        title="ion-ios-star"
      >
        <i className="ion-ios-star"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-star-half")}
        title="ion-ios-star-half"
      >
        <i className="ion-ios-star-half"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-star-outline")}
        title="ion-ios-star-outline"
      >
        <i className="ion-ios-star-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-stopwatch")}
        title="ion-ios-stopwatch"
      >
        <i className="ion-ios-stopwatch"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-stopwatch-outline")}
        title="ion-ios-stopwatch-outline"
      >
        <i className="ion-ios-stopwatch-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-sunny")}
        title="ion-ios-sunny"
      >
        <i className="ion-ios-sunny"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-sunny-outline")}
        title="ion-ios-sunny-outline"
      >
        <i className="ion-ios-sunny-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-telephone")}
        title="ion-ios-telephone"
      >
        <i className="ion-ios-telephone"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-telephone-outline")}
        title="ion-ios-telephone-outline"
      >
        <i className="ion-ios-telephone-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-tennisball")}
        title="ion-ios-tennisball"
      >
        <i className="ion-ios-tennisball"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-tennisball-outline")}
        title="ion-ios-tennisball-outline"
      >
        <i className="ion-ios-tennisball-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-thunderstorm")}
        title="ion-ios-thunderstorm"
      >
        <i className="ion-ios-thunderstorm"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-thunderstorm-outline")}
        title="ion-ios-thunderstorm-outline"
      >
        <i className="ion-ios-thunderstorm-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-time")}
        title="ion-ios-time"
      >
        <i className="ion-ios-time"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-time-outline")}
        title="ion-ios-time-outline"
      >
        <i className="ion-ios-time-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-timer")}
        title="ion-ios-timer"
      >
        <i className="ion-ios-timer"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-timer-outline")}
        title="ion-ios-timer-outline"
      >
        <i className="ion-ios-timer-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-toggle")}
        title="ion-ios-toggle"
      >
        <i className="ion-ios-toggle"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-toggle-outline")}
        title="ion-ios-toggle-outline"
      >
        <i className="ion-ios-toggle-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-trash")}
        title="ion-ios-trash"
      >
        <i className="ion-ios-trash"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-trash-outline")}
        title="ion-ios-trash-outline"
      >
        <i className="ion-ios-trash-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-undo")}
        title="ion-ios-undo"
      >
        <i className="ion-ios-undo"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-undo-outline")}
        title="ion-ios-undo-outline"
      >
        <i className="ion-ios-undo-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-unlocked")}
        title="ion-ios-unlocked"
      >
        <i className="ion-ios-unlocked"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-unlocked-outline")}
        title="ion-ios-unlocked-outline"
      >
        <i className="ion-ios-unlocked-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-upload")}
        title="ion-ios-upload"
      >
        <i className="ion-ios-upload"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-upload-outline")}
        title="ion-ios-upload-outline"
      >
        <i className="ion-ios-upload-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-videocam")}
        title="ion-ios-videocam"
      >
        <i className="ion-ios-videocam"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-videocam-outline")}
        title="ion-ios-videocam-outline"
      >
        <i className="ion-ios-videocam-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-volume-high")}
        title="ion-ios-volume-high"
      >
        <i className="ion-ios-volume-high"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-volume-low")}
        title="ion-ios-volume-low"
      >
        <i className="ion-ios-volume-low"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-wineglass")}
        title="ion-ios-wineglass"
      >
        <i className="ion-ios-wineglass"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-wineglass-outline")}
        title="ion-ios-wineglass-outline"
      >
        <i className="ion-ios-wineglass-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-world")}
        title="ion-ios-world"
      >
        <i className="ion-ios-world"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ios-world-outline")}
        title="ion-ios-world-outline"
      >
        <i className="ion-ios-world-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ipad")}
        title="ion-ipad"
      >
        <i className="ion-ipad"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-iphone")}
        title="ion-iphone"
      >
        <i className="ion-iphone"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ipod")}
        title="ion-ipod"
      >
        <i className="ion-ipod"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-jet")}
        title="ion-jet"
      >
        <i className="ion-jet"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-key")}
        title="ion-key"
      >
        <i className="ion-key"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-knife")}
        title="ion-knife"
      >
        <i className="ion-knife"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-laptop")}
        title="ion-laptop"
      >
        <i className="ion-laptop"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-leaf")}
        title="ion-leaf"
      >
        <i className="ion-leaf"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-levels")}
        title="ion-levels"
      >
        <i className="ion-levels"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-lightbulb")}
        title="ion-lightbulb"
      >
        <i className="ion-lightbulb"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-link")}
        title="ion-link"
      >
        <i className="ion-link"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-load-a")}
        title="ion-load-a"
      >
        <i className="ion-load-a"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-load-b")}
        title="ion-load-b"
      >
        <i className="ion-load-b"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-load-c")}
        title="ion-load-c"
      >
        <i className="ion-load-c"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-load-d")}
        title="ion-load-d"
      >
        <i className="ion-load-d"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-location")}
        title="ion-location"
      >
        <i className="ion-location"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-lock-combination")}
        title="ion-lock-combination"
      >
        <i className="ion-lock-combination"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-locked")}
        title="ion-locked"
      >
        <i className="ion-locked"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-log-in")}
        title="ion-log-in"
      >
        <i className="ion-log-in"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-log-out")}
        title="ion-log-out"
      >
        <i className="ion-log-out"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-loop")}
        title="ion-loop"
      >
        <i className="ion-loop"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-magnet")}
        title="ion-magnet"
      >
        <i className="ion-magnet"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-male")}
        title="ion-male"
      >
        <i className="ion-male"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-man")}
        title="ion-man"
      >
        <i className="ion-man"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-map")}
        title="ion-map"
      >
        <i className="ion-map"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-medkit")}
        title="ion-medkit"
      >
        <i className="ion-medkit"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-merge")}
        title="ion-merge"
      >
        <i className="ion-merge"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-mic-a")}
        title="ion-mic-a"
      >
        <i className="ion-mic-a"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-mic-b")}
        title="ion-mic-b"
      >
        <i className="ion-mic-b"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-mic-c")}
        title="ion-mic-c"
      >
        <i className="ion-mic-c"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-minus")}
        title="ion-minus"
      >
        <i className="ion-minus"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-minus-circled")}
        title="ion-minus-circled"
      >
        <i className="ion-minus-circled"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-minus-round")}
        title="ion-minus-round"
      >
        <i className="ion-minus-round"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-model-s")}
        title="ion-model-s"
      >
        <i className="ion-model-s"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-monitor")}
        title="ion-monitor"
      >
        <i className="ion-monitor"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-more")}
        title="ion-more"
      >
        <i className="ion-more"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-mouse")}
        title="ion-mouse"
      >
        <i className="ion-mouse"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-music-note")}
        title="ion-music-note"
      >
        <i className="ion-music-note"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-navicon")}
        title="ion-navicon"
      >
        <i className="ion-navicon"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-navicon-round")}
        title="ion-navicon-round"
      >
        <i className="ion-navicon-round"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-navigate")}
        title="ion-navigate"
      >
        <i className="ion-navigate"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-network")}
        title="ion-network"
      >
        <i className="ion-network"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-no-smoking")}
        title="ion-no-smoking"
      >
        <i className="ion-no-smoking"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-nuclear")}
        title="ion-nuclear"
      >
        <i className="ion-nuclear"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-outlet")}
        title="ion-outlet"
      >
        <i className="ion-outlet"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-paintbrush")}
        title="ion-paintbrush"
      >
        <i className="ion-paintbrush"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-paintbucket")}
        title="ion-paintbucket"
      >
        <i className="ion-paintbucket"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-paper-airplane")}
        title="ion-paper-airplane"
      >
        <i className="ion-paper-airplane"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-paperclip")}
        title="ion-paperclip"
      >
        <i className="ion-paperclip"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-pause")}
        title="ion-pause"
      >
        <i className="ion-pause"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-person")}
        title="ion-person"
      >
        <i className="ion-person"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-person-add")}
        title="ion-person-add"
      >
        <i className="ion-person-add"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-person-stalker")}
        title="ion-person-stalker"
      >
        <i className="ion-person-stalker"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-pie-graph")}
        title="ion-pie-graph"
      >
        <i className="ion-pie-graph"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-pin")}
        title="ion-pin"
      >
        <i className="ion-pin"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-pinpoint")}
        title="ion-pinpoint"
      >
        <i className="ion-pinpoint"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-pizza")}
        title="ion-pizza"
      >
        <i className="ion-pizza"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-plane")}
        title="ion-plane"
      >
        <i className="ion-plane"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-planet")}
        title="ion-planet"
      >
        <i className="ion-planet"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-play")}
        title="ion-play"
      >
        <i className="ion-play"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-playstation")}
        title="ion-playstation"
      >
        <i className="ion-playstation"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-plus")}
        title="ion-plus"
      >
        <i className="ion-plus"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-plus-circled")}
        title="ion-plus-circled"
      >
        <i className="ion-plus-circled"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-plus-round")}
        title="ion-plus-round"
      >
        <i className="ion-plus-round"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-podium")}
        title="ion-podium"
      >
        <i className="ion-podium"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-pound")}
        title="ion-pound"
      >
        <i className="ion-pound"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-power")}
        title="ion-power"
      >
        <i className="ion-power"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-pricetag")}
        title="ion-pricetag"
      >
        <i className="ion-pricetag"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-pricetags")}
        title="ion-pricetags"
      >
        <i className="ion-pricetags"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-printer")}
        title="ion-printer"
      >
        <i className="ion-printer"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-pull-request")}
        title="ion-pull-request"
      >
        <i className="ion-pull-request"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-qr-scanner")}
        title="ion-qr-scanner"
      >
        <i className="ion-qr-scanner"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-quote")}
        title="ion-quote"
      >
        <i className="ion-quote"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-radio-waves")}
        title="ion-radio-waves"
      >
        <i className="ion-radio-waves"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-record")}
        title="ion-record"
      >
        <i className="ion-record"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-refresh")}
        title="ion-refresh"
      >
        <i className="ion-refresh"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-reply")}
        title="ion-reply"
      >
        <i className="ion-reply"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-reply-all")}
        title="ion-reply-all"
      >
        <i className="ion-reply-all"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ribbon-a")}
        title="ion-ribbon-a"
      >
        <i className="ion-ribbon-a"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-ribbon-b")}
        title="ion-ribbon-b"
      >
        <i className="ion-ribbon-b"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-sad")}
        title="ion-sad"
      >
        <i className="ion-sad"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-sad-outline")}
        title="ion-sad-outline"
      >
        <i className="ion-sad-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-scissors")}
        title="ion-scissors"
      >
        <i className="ion-scissors"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-search")}
        title="ion-search"
      >
        <i className="ion-search"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-settings")}
        title="ion-settings"
      >
        <i className="ion-settings"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-share")}
        title="ion-share"
      >
        <i className="ion-share"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-shuffle")}
        title="ion-shuffle"
      >
        <i className="ion-shuffle"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-skip-backward")}
        title="ion-skip-backward"
      >
        <i className="ion-skip-backward"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-skip-forward")}
        title="ion-skip-forward"
      >
        <i className="ion-skip-forward"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-android")}
        title="ion-social-android"
      >
        <i className="ion-social-android"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-android-outline")}
        title="ion-social-android-outline"
      >
        <i className="ion-social-android-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-angular")}
        title="ion-social-angular"
      >
        <i className="ion-social-angular"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-angular-outline")}
        title="ion-social-angular-outline"
      >
        <i className="ion-social-angular-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-apple")}
        title="ion-social-apple"
      >
        <i className="ion-social-apple"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-apple-outline")}
        title="ion-social-apple-outline"
      >
        <i className="ion-social-apple-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-bitcoin")}
        title="ion-social-bitcoin"
      >
        <i className="ion-social-bitcoin"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-bitcoin-outline")}
        title="ion-social-bitcoin-outline"
      >
        <i className="ion-social-bitcoin-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-buffer")}
        title="ion-social-buffer"
      >
        <i className="ion-social-buffer"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-buffer-outline")}
        title="ion-social-buffer-outline"
      >
        <i className="ion-social-buffer-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-chrome")}
        title="ion-social-chrome"
      >
        <i className="ion-social-chrome"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-chrome-outline")}
        title="ion-social-chrome-outline"
      >
        <i className="ion-social-chrome-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-codepen")}
        title="ion-social-codepen"
      >
        <i className="ion-social-codepen"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-codepen-outline")}
        title="ion-social-codepen-outline"
      >
        <i className="ion-social-codepen-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-css3")}
        title="ion-social-css3"
      >
        <i className="ion-social-css3"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-css3-outline")}
        title="ion-social-css3-outline"
      >
        <i className="ion-social-css3-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-designernews")}
        title="ion-social-designernews"
      >
        <i className="ion-social-designernews"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-designernews-outline")}
        title="ion-social-designernews-outline"
      >
        <i className="ion-social-designernews-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-dribbble")}
        title="ion-social-dribbble"
      >
        <i className="ion-social-dribbble"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-dribbble-outline")}
        title="ion-social-dribbble-outline"
      >
        <i className="ion-social-dribbble-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-dropbox")}
        title="ion-social-dropbox"
      >
        <i className="ion-social-dropbox"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-dropbox-outline")}
        title="ion-social-dropbox-outline"
      >
        <i className="ion-social-dropbox-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-euro")}
        title="ion-social-euro"
      >
        <i className="ion-social-euro"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-euro-outline")}
        title="ion-social-euro-outline"
      >
        <i className="ion-social-euro-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-facebook")}
        title="ion-social-facebook"
      >
        <i className="ion-social-facebook"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-facebook-outline")}
        title="ion-social-facebook-outline"
      >
        <i className="ion-social-facebook-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-foursquare")}
        title="ion-social-foursquare"
      >
        <i className="ion-social-foursquare"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-foursquare-outline")}
        title="ion-social-foursquare-outline"
      >
        <i className="ion-social-foursquare-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-freebsd-devil")}
        title="ion-social-freebsd-devil"
      >
        <i className="ion-social-freebsd-devil"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-github")}
        title="ion-social-github"
      >
        <i className="ion-social-github"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-github-outline")}
        title="ion-social-github-outline"
      >
        <i className="ion-social-github-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-google")}
        title="ion-social-google"
      >
        <i className="ion-social-google"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-google-outline")}
        title="ion-social-google-outline"
      >
        <i className="ion-social-google-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-googleplus")}
        title="ion-social-googleplus"
      >
        <i className="ion-social-googleplus"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-googleplus-outline")}
        title="ion-social-googleplus-outline"
      >
        <i className="ion-social-googleplus-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-hackernews")}
        title="ion-social-hackernews"
      >
        <i className="ion-social-hackernews"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-hackernews-outline")}
        title="ion-social-hackernews-outline"
      >
        <i className="ion-social-hackernews-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-html5")}
        title="ion-social-html5"
      >
        <i className="ion-social-html5"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-html5-outline")}
        title="ion-social-html5-outline"
      >
        <i className="ion-social-html5-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-instagram")}
        title="ion-social-instagram"
      >
        <i className="ion-social-instagram"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-instagram-outline")}
        title="ion-social-instagram-outline"
      >
        <i className="ion-social-instagram-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-javascript")}
        title="ion-social-javascript"
      >
        <i className="ion-social-javascript"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-javascript-outline")}
        title="ion-social-javascript-outline"
      >
        <i className="ion-social-javascript-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-linkedin")}
        title="ion-social-linkedin"
      >
        <i className="ion-social-linkedin"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-linkedin-outline")}
        title="ion-social-linkedin-outline"
      >
        <i className="ion-social-linkedin-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-markdown")}
        title="ion-social-markdown"
      >
        <i className="ion-social-markdown"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-nodejs")}
        title="ion-social-nodejs"
      >
        <i className="ion-social-nodejs"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-octocat")}
        title="ion-social-octocat"
      >
        <i className="ion-social-octocat"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-pinterest")}
        title="ion-social-pinterest"
      >
        <i className="ion-social-pinterest"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-pinterest-outline")}
        title="ion-social-pinterest-outline"
      >
        <i className="ion-social-pinterest-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-python")}
        title="ion-social-python"
      >
        <i className="ion-social-python"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-reddit")}
        title="ion-social-reddit"
      >
        <i className="ion-social-reddit"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-reddit-outline")}
        title="ion-social-reddit-outline"
      >
        <i className="ion-social-reddit-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-rss")}
        title="ion-social-rss"
      >
        <i className="ion-social-rss"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-rss-outline")}
        title="ion-social-rss-outline"
      >
        <i className="ion-social-rss-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-sass")}
        title="ion-social-sass"
      >
        <i className="ion-social-sass"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-skype")}
        title="ion-social-skype"
      >
        <i className="ion-social-skype"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-skype-outline")}
        title="ion-social-skype-outline"
      >
        <i className="ion-social-skype-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-snapchat")}
        title="ion-social-snapchat"
      >
        <i className="ion-social-snapchat"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-snapchat-outline")}
        title="ion-social-snapchat-outline"
      >
        <i className="ion-social-snapchat-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-tumblr")}
        title="ion-social-tumblr"
      >
        <i className="ion-social-tumblr"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-tumblr-outline")}
        title="ion-social-tumblr-outline"
      >
        <i className="ion-social-tumblr-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-tux")}
        title="ion-social-tux"
      >
        <i className="ion-social-tux"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-twitch")}
        title="ion-social-twitch"
      >
        <i className="ion-social-twitch"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-twitch-outline")}
        title="ion-social-twitch-outline"
      >
        <i className="ion-social-twitch-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-twitter")}
        title="ion-social-twitter"
      >
        <i className="ion-social-twitter"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-twitter-outline")}
        title="ion-social-twitter-outline"
      >
        <i className="ion-social-twitter-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-usd")}
        title="ion-social-usd"
      >
        <i className="ion-social-usd"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-usd-outline")}
        title="ion-social-usd-outline"
      >
        <i className="ion-social-usd-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-vimeo")}
        title="ion-social-vimeo"
      >
        <i className="ion-social-vimeo"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-vimeo-outline")}
        title="ion-social-vimeo-outline"
      >
        <i className="ion-social-vimeo-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-whatsapp")}
        title="ion-social-whatsapp"
      >
        <i className="ion-social-whatsapp"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-whatsapp-outline")}
        title="ion-social-whatsapp-outline"
      >
        <i className="ion-social-whatsapp-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-windows")}
        title="ion-social-windows"
      >
        <i className="ion-social-windows"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-windows-outline")}
        title="ion-social-windows-outline"
      >
        <i className="ion-social-windows-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-wordpress")}
        title="ion-social-wordpress"
      >
        <i className="ion-social-wordpress"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-wordpress-outline")}
        title="ion-social-wordpress-outline"
      >
        <i className="ion-social-wordpress-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-yahoo")}
        title="ion-social-yahoo"
      >
        <i className="ion-social-yahoo"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-yahoo-outline")}
        title="ion-social-yahoo-outline"
      >
        <i className="ion-social-yahoo-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-yen")}
        title="ion-social-yen"
      >
        <i className="ion-social-yen"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-yen-outline")}
        title="ion-social-yen-outline"
      >
        <i className="ion-social-yen-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-youtube")}
        title="ion-social-youtube"
      >
        <i className="ion-social-youtube"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-social-youtube-outline")}
        title="ion-social-youtube-outline"
      >
        <i className="ion-social-youtube-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-soup-can")}
        title="ion-soup-can"
      >
        <i className="ion-soup-can"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-soup-can-outline")}
        title="ion-soup-can-outline"
      >
        <i className="ion-soup-can-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-speakerphone")}
        title="ion-speakerphone"
      >
        <i className="ion-speakerphone"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-speedometer")}
        title="ion-speedometer"
      >
        <i className="ion-speedometer"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-spoon")}
        title="ion-spoon"
      >
        <i className="ion-spoon"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-star")}
        title="ion-star"
      >
        <i className="ion-star"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-stats-bars")}
        title="ion-stats-bars"
      >
        <i className="ion-stats-bars"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-steam")}
        title="ion-steam"
      >
        <i className="ion-steam"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-stop")}
        title="ion-stop"
      >
        <i className="ion-stop"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-thermometer")}
        title="ion-thermometer"
      >
        <i className="ion-thermometer"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-thumbsdown")}
        title="ion-thumbsdown"
      >
        <i className="ion-thumbsdown"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-thumbsup")}
        title="ion-thumbsup"
      >
        <i className="ion-thumbsup"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-toggle")}
        title="ion-toggle"
      >
        <i className="ion-toggle"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-toggle-filled")}
        title="ion-toggle-filled"
      >
        <i className="ion-toggle-filled"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-transgender")}
        title="ion-transgender"
      >
        <i className="ion-transgender"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-trash-a")}
        title="ion-trash-a"
      >
        <i className="ion-trash-a"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-trash-b")}
        title="ion-trash-b"
      >
        <i className="ion-trash-b"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-trophy")}
        title="ion-trophy"
      >
        <i className="ion-trophy"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-tshirt")}
        title="ion-tshirt"
      >
        <i className="ion-tshirt"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-tshirt-outline")}
        title="ion-tshirt-outline"
      >
        <i className="ion-tshirt-outline"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-umbrella")}
        title="ion-umbrella"
      >
        <i className="ion-umbrella"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-university")}
        title="ion-university"
      >
        <i className="ion-university"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-unlocked")}
        title="ion-unlocked"
      >
        <i className="ion-unlocked"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-upload")}
        title="ion-upload"
      >
        <i className="ion-upload"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-usb")}
        title="ion-usb"
      >
        <i className="ion-usb"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-videocamera")}
        title="ion-videocamera"
      >
        <i className="ion-videocamera"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-volume-high")}
        title="ion-volume-high"
      >
        <i className="ion-volume-high"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-volume-low")}
        title="ion-volume-low"
      >
        <i className="ion-volume-low"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-volume-medium")}
        title="ion-volume-medium"
      >
        <i className="ion-volume-medium"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-volume-mute")}
        title="ion-volume-mute"
      >
        <i className="ion-volume-mute"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-wand")}
        title="ion-wand"
      >
        <i className="ion-wand"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-waterdrop")}
        title="ion-waterdrop"
      >
        <i className="ion-waterdrop"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-wifi")}
        title="ion-wifi"
      >
        <i className="ion-wifi"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-wineglass")}
        title="ion-wineglass"
      >
        <i className="ion-wineglass"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-woman")}
        title="ion-woman"
      >
        <i className="ion-woman"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-wrench")}
        title="ion-wrench"
      >
        <i className="ion-wrench"></i>
      </li>
      <li
        className="icon-item col-3 col-sm-2 col-lg-1 tx-center mg-t-10 mg-lg-t-0"
        onClick={() => handleIconClick("ion-xbox")}
        title="ion-xbox"
      >
        <i className="ion-xbox"></i>
      </li>
    </>
  );
}

export { ListIcons };
