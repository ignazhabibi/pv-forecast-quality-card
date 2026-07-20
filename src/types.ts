export type ForecastQualityMetric = "power" | "energy";
export type ProviderMarker = "circle" | "diamond";

export interface ProviderConfig {
  name?: string;
  entity?: string;
  color?: string;
  marker?: ProviderMarker;
}

export interface ForecastQualityCardConfig {
  type: string;
  metric: ForecastQualityMetric;
  title?: string;
  provider_1: ProviderConfig;
  provider_2?: ProviderConfig;
  interval_count_entity?: string;
  snapshot_entity?: string;
  minimum_intervals?: number;
}

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
  last_changed?: string;
  last_updated?: string;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  locale?: {
    language?: string;
  };
  formatEntityName?: (
    stateObj: HassEntity,
    components?: Array<{ type: string }>,
    options?: { separator?: string },
  ) => string;
}

export interface ProviderReading {
  name: string;
  entity?: string;
  color: string;
  marker: ProviderMarker;
  value: number | null;
}

declare global {
  interface Window {
    customCards?: Array<Record<string, unknown>>;
  }
}
