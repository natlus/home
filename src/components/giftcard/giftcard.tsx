import { CreditCard, Gamepad2 } from 'lucide-react';

export default function GiftCard({ name }: { name: string }) {
  return (
    <div className="relative aspect-[1.586/1] w-full max-w-md overflow-hidden rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 shadow-xl">
      <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>
      <div className="relative flex h-full flex-col justify-between p-6">
        <div className="flex items-start justify-between">
          <Gamepad2 className="h-12 w-12 text-gray-200" />
          <div className="text-right">
            <p
              className="text-2xl font-bold text-gray-200"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              Presentkort
            </p>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-200">
              till valfritt spel
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="h-8 w-full rounded bg-gray-600 bg-opacity-30"></div>
          <div className="flex justify-between">
            <div className="space-y-1">
              <p className="text-xs font-medium text-gray-200">Kortinnehavare</p>
              <p className="text-sm font-bold text-gray-200">{name}</p>
            </div>
            <div className="space-y-1 text-right">
              <p className="text-xs font-medium text-gray-200">Utgår</p>
              <p className="text-sm font-bold text-gray-200">ALDRIG</p>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex space-x-2">
            {['A', 'B', 'X', 'Y'].map((button) => (
              <div
                key={button}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 bg-opacity-30"
              >
                <span className="text-xs font-bold text-gray-200">{button}</span>
              </div>
            ))}
          </div>
          <CreditCard className="h-10 w-10 text-gray-200" />
        </div>
      </div>
    </div>
  );
}
