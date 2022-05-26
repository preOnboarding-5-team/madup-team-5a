import { useRecoilValue } from 'recoil';
import { formatNumber } from 'services/formatNumber';
import { packMediaData } from 'services/packMediaData';
import { datesAtom } from 'pages/dashboard/_states/datesAtom';
import { mediaChannelsAtom } from 'pages/dashboard/_states/mediaChannelsAtom';
import { mediaGridAttributesAtom } from 'pages/dashboard/_states/mediaGridAttributesAtom';

import styles from './style.module.scss';

const MediaGrid = () => {
  const duration = useRecoilValue(datesAtom);
  const attributes = useRecoilValue(mediaGridAttributesAtom);
  const channels = useRecoilValue(mediaChannelsAtom);

  const data = packMediaData(
    channels.map(({ key }) => key),
    duration.start,
    duration.end
  );

  const headContents = attributes.map(({ key, display }) => <th key={`media-thead-${key}`}>{display}</th>);
  const bodyContents = channels.map(({ key: chKey, display }, idx) => (
    <tr key={`media-row-${chKey}`}>
      <th>{display}</th>
      {attributes.map(({ key: attrKey }) => (
        <td key={`media-cell-${chKey}-${attrKey}`}>{formatNumber(data.channels[idx][attrKey])}</td>
      ))}
    </tr>
  ));
  const aggContents = (
    <tr className={styles.aggRow}>
      <th>총계</th>
      {attributes.map(({ key }) => (
        <td key={`media-agg-${key}`}>{formatNumber(data.agg[key])}</td>
      ))}
    </tr>
  );

  return (
    <table>
      <thead>
        <tr>
          <td />
          {headContents}
        </tr>
      </thead>
      <tbody>
        {bodyContents}
        {aggContents}
      </tbody>
    </table>
  );
};

export default MediaGrid;
