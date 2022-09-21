export interface Window {
  ethereum: {
    on: (method: string) => unknown
    removeListener: (method: string, handler: () => void) => void
  }
}
