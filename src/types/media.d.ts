interface MediaChannelDisplayMap {
  key: readonly MediaChannel;
  display: readonly string;
}

interface MediaDataDisplayMap {
  key: readonly MediaDataAttribute;
  display: readonly string;
}

interface MediaStatDisplayMap {
  key: readonly MediaStatsAttribute;
  display: readonly string;
}

type MediaDataAttribute = keyof MediaData;
type MediaStatAttribute = keyof MediaStats;

type MediaDataTable = {
  channels: MediaData[];
  agg: MediaData;
};

interface MediaStatTable {
  channels: MediaStats[];
  agg: MediaStats;
}

interface MediaData extends MediaStats {
  roas: number;
  ctr: number;
  cpc: number;
}

interface MediaStats {
  cost: number; // cost
  click: number; // click
  sale: number; // roas * click / 100
  imp: number; // imp
  convValue: number;
}

interface MediaDataRaw {
  readonly channel: MediaChannel;
  readonly date: string;
  readonly imp: number; // impressions; 사용자들에게 보여진 횟수
  readonly click: number;
  readonly cost: number;
  readonly convValue: number; // conversion value;
  readonly ctr: number; // click-through rate = clicks / impressions * 100
  readonly cvr: number; // conversion rate = conversions / clicks * 100
  readonly cpc: number; // cost per click
  readonly cpa: number; // cost per action
  readonly roas: number; // return on ad spend = sales / cost * 100
}

type MediaChannel = 'facebook' | 'naver' | 'google' | 'kakao';
