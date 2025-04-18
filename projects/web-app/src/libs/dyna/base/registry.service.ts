export class RegistryService<T extends Record<string, unknown>> {
  private _registry: T = {} as T;

  register<K extends keyof T>(key: K, value: T[K]): void {
    this._registry[key] = value;
  }

  get<K extends keyof T>(key: K): T[K] | undefined {
    return this._registry[key];
  }

  has(key: string): boolean {
    return !!this._registry[key as keyof T];
  }

  registerAll(values: T): void {
    this._registry = { ...this._registry, ...values };
  }
  all(): Readonly<T> {
    return Object.freeze(this._registry);
  }
}
