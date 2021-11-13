import { AiOutlineDown } from 'react-icons/ai';
import memberMap from '../../memberMap.json';

const MemberModal = (props) => {
  let entry;
  if (!props.activeBro) {
    entry = null;
  } else {
    entry = props.members[props.activeClass].find(
      (e) => e.nickname === props.activeBro
    );
  }

  const generateLink = (name, more = false) => {
    let fst = name.indexOf('"');
    let tmp = name.slice(fst + 1);
    let snd = tmp.indexOf('"');
    let nickname = tmp.slice(0, snd);
    if (
      fst !== -1 &&
      name &&
      memberMap.hasOwnProperty(nickname) &&
      props.enableNavigation
    ) {
      return (
        <>
          <span
            className="roster-info-link"
            onClick={() => props.setActive(memberMap[nickname].class, nickname)}
          >
            {name}
          </span>
          {more ? <span>, </span> : null}
        </>
      );
    } else {
      return (
        <>
          <span>{name}</span> {more ? <span>, </span> : null}
        </>
      );
    }
  };

  return entry ? (
    <div id="roster-modal">
      <AiOutlineDown onClick={props.closeInfoModal} className="close-modal" />
      <div className="roster-flex-container">
        <img
          alt={entry['nickname']}
          src={
            require(`../../assets/members/${
              entry['modal-img'] ? entry['modal-img'] : 'default.jpg'
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
              <li>
                <span className="roster-info-category">Big Bro: </span>
                {generateLink(entry['big-bro'])}
              </li>
              <li>
                <span className="roster-info-category">Little Bro(s): </span>
                {entry['little-bro'].map((name, idx) =>
                  generateLink(name, idx + 1 !== entry['little-bro'].length)
                )}
              </li>
              {entry['prev-chapter'] ? (
                <li>
                  <span className="roster-info-category">Annex: </span>
                  {entry['prev-chapter']}
                </li>
              ) : null}
              {entry['major'] ? (
                <li>
                  <span className="roster-info-category">Major: </span>
                  {entry['major']}
                </li>
              ) : null}
              {entry['year'] ? (
                <li>
                  <span className="roster-info-category">Year: </span>
                  {entry['year']}
                </li>
              ) : null}
              {entry['email'] ? (
                <li>
                  <span className="roster-info-category">Email: </span>
                  {entry['email']}
                </li>
              ) : null}
              {entry['facebook'] ? (
                <li>
                  <span className="roster-info-category">Facebook: </span>
                  {entry['facebook']}
                </li>
              ) : null}
              {entry['birthday'] ? (
                <li>
                  <span className="roster-info-category">Birthday: </span>
                  {entry['birthday']}
                </li>
              ) : null}
              {entry['hometown'] ? (
                <li>
                  <span className="roster-info-category">Hometown: </span>
                  {entry['hometown']}
                </li>
              ) : null}
              {entry['dream-ride'] ? (
                <li>
                  <span className="roster-info-category">Dream Ride: </span>
                  {entry['dream-ride']}
                </li>
              ) : null}
              {entry['fav-quote'] ? (
                <li>
                  <span className="roster-info-category">Favorite Quote: </span>
                  {entry['fav-quote']}
                </li>
              ) : null}
              {entry['mil-dollars'] ? (
                <li>
                  <span className="roster-info-category">
                    If I had a million dollars:{' '}
                  </span>
                  {entry['mil-dollars']}
                </li>
              ) : null}
              {entry['fun-fact'] ? (
                <li>
                  <span className="roster-info-category">Fun fact: </span>
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
  ) : null;
};

export default MemberModal;
