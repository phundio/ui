import React, { PropTypes } from 'react';
import strings from 'lang';
import heroes from 'dotaconstants/json/heroes.json';

import styles from './PicksBans.css';

// Team 0 - radiant, 1 - dire
const PicksBans = ({ data, matchId }) => {
  const path = location.pathname.split(`/matches/${matchId}`)[1];
  if (data && (path === '' || path === '/overview')) {
    return (
      <div className={styles.PicksBans}>
        {data.map(pb => (
          <section key={pb.order}>
            <img
              src={`${API_HOST}${heroes[pb.hero_id].img}`}
              role="presentation"
              className={styles.image}
              data-isPick={pb.is_pick}
            />
            {!pb.is_pick && <div className={styles.ban} />}
            <aside>
              {pb.is_pick ? strings.match_pick : strings.match_ban} <b>{pb.order + 1}</b>
            </aside>
          </section>
        ))}
      </div>
    );
  }

  return null;
};

PicksBans.PropTypes = {
  match: PropTypes.object,
};

export default PicksBans;