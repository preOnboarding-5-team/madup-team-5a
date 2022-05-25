import rawData from 'data/wanted_FE-media-channel-data-set.json';
import dayjs from 'dayjs';

// export const packMediaChartData = (channels: MediaChannel[], start?: string, end?: string) => {};

export const packMediaData = (channels: MediaChannel[], start?: string, end?: string): MediaDataTable => {
  const statTable = initStatTable(channels);
  const channelSet = new Set(channels);
  const channel2idx = Object.fromEntries(channels.map((channel, idx) => [channel, idx])) as {
    [ch in MediaChannel]: number;
  };

  (rawData as MediaDataRaw[]).forEach(({ channel, date, cost, click, roas, imp, convValue }) => {
    if (
      (start && dayjs(start).isValid() && dayjs(date).isBefore(dayjs(start))) ||
      (end && dayjs(end).isValid() && dayjs(date).isAfter(dayjs(end))) ||
      !channelSet.has(channel)
    ) {
      return;
    }

    const channelRecord = statTable.channels[channel2idx[channel]];
    const aggRecord = statTable.agg;

    channelRecord.cost += cost;
    aggRecord.cost += cost;

    channelRecord.click += click;
    aggRecord.click += click;

    const sale = roas * click;
    channelRecord.sale += sale;
    aggRecord.sale += sale;

    channelRecord.imp += imp;
    aggRecord.imp += imp;

    channelRecord.convValue += convValue;
    aggRecord.convValue += convValue;

    // channelRecord.channel = channel;
  });

  const dataTable = {
    channels: statTable.channels.map(addRates),
    agg: addRates(statTable.agg),
  };

  return dataTable;
};

const addRates = ({ cost, click, sale, imp, convValue }: MediaStats): MediaData => ({
  cost,
  click,
  sale,
  imp,
  convValue,
  roas: cost > 0 ? (sale / cost) * 100 : 0,
  ctr: imp > 0 ? (click / imp) * 100 : 0,
  cpc: click > 0 ? cost / click : 0,
});

const initStats = (): MediaStats => ({
  cost: 0,
  click: 0,
  sale: 0,
  imp: 0,
  convValue: 0,
});

const initStatTable = (channels: MediaChannel[]): MediaStatTable => ({
  channels: channels.map(() => initStats()),
  agg: initStats(),
});
