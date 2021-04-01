import { AiOutlineDown } from 'react-icons/ai';

const MemberModal = (props) => {
  // console.log(props);
  var entry = props.members[props.activeClass][props.activeBro];

  return (
    <div id="roster-modal">
      <AiOutlineDown onClick={props.closeInfoModal} className="close-modal" />
      <div className="roster-flex-container">
        <img
          alt={entry['nickname']}
          src={
            require(`../../assets/members/${
              entry['modal-img'] ? entry['modal-img'] : 'default.png'
            }`).default
          }
        />
        <div className="roster-info">
          <div className="roster-info-name">
            <h1>{entry.number}</h1>
            <h2>{entry.name}</h2>
          </div>
          {entry['bio'] ? <p>{entry['bio']}</p> : null}
          <br />

          <div className="roster-info-desc">
            <ul>
              {entry['big-bro'] ? (
                <li>
                  <span>Big Bro: </span>
                  {entry['big-bro']}
                </li>
              ) : null}
              {entry['little-bro'] ? (
                <li>
                  <span>Little Bro(s): </span>
                  {entry['little-bro']}
                </li>
              ) : null}
              {entry['major'] ? (
                <li>
                  <span>Major: </span>
                  {entry['major']}
                </li>
              ) : null}
              {entry['email'] ? (
                <li>
                  <span>Email: </span>
                  {entry['email']}
                </li>
              ) : null}
              {entry['facebook'] ? (
                <li>
                  <span>Facebook: </span>
                  {entry['facebook']}
                </li>
              ) : null}
              {entry['birthday'] ? (
                <li>
                  <span>Birthday: </span>
                  {entry['birthday']}
                </li>
              ) : null}
              {entry['hometown'] ? (
                <li>
                  <span>Hometown: </span>
                  {entry['hometown']}
                </li>
              ) : null}
              {entry['dream-ride'] ? (
                <li>
                  <span>Dream Ride: </span>
                  {entry['dream-ride']}
                </li>
              ) : null}
              {entry['fav-quote'] ? (
                <li>
                  <span>Favorite Quote: </span>
                  {entry['fav-quote']}
                </li>
              ) : null}
              {entry['mil-dollars'] ? (
                <li>
                  <span>If I had a million dollars: </span>
                  {entry['mil-dollars']}
                </li>
              ) : null}
              {entry['fun-fact'] ? (
                <li>
                  <span>Fun fact: </span>
                  {entry['fun-fact']}
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </div>

      <div className="roster-info-card-container">
        {entry['advice'] ? (
          <div className="roster-info-card">
            <h1>Advice to Freshmen</h1>
            <p>{entry['advice']}</p>
          </div>
        ) : null}

        {entry['why-join'] ? (
          <div className="roster-info-card">
            <h1>Why I Joined</h1>
            <p>{entry['why-join']}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MemberModal;
