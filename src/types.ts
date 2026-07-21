export type ForecastQualityMetric = "power" | "energy";
export type ProviderMarker = "circle";

export interface ProviderConfig {
  name?: string;
  entity?: string;
  energy_total_entity?: string;
  color?: string;
  marker?: ProviderMarker;
}

export interface ForecastQualityContextConfig {
  value: string;
  label?: string;
  provider_1?: ProviderConfig;
  provider_2?: ProviderConfig;
  interval_count_entity?: string;
  snapshot_entity?: string;
  actual_energy_entity?: string;
  evaluable?: boolean;
}

export interface ForecastQualityCardConfig {
  type: string;
  metric: ForecastQualityMetric;
  title?: string;
  provider_1: ProviderConfig;
  provider_2?: ProviderConfig;
  interval_count_entity?: string;
  snapshot_entity?: string;
  actual_energy_entity?: string;
  minimum_intervals?: number;
  selection_entity?: string;
  contexts?: ForecastQualityContextConfig[];
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
  callWS?<T>(message: Record<string, unknown>): Promise<T>;
  callService?(
    domain: string,
    service: string,
    data?: Record<string, unknown>,
    target?: Record<string, unknown>,
  ): Promise<unknown>;
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
  energy?: number | null;
  actualEnergy?: number | null;
}

declare global {
  interface Window {
    customCards?: Array<Record<string, unknown>>;
  }
}
