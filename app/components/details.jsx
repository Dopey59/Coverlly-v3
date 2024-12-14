import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Details() {
  return (
    <div className=" w-full anim-product rounded max-w-lg mt-6 sm:mt-0 ">
      <div className=" w-full max-w-lg divide-y divide-gray-100 rounded-xl bg-white/5">
        <Disclosure as="div" className="p-4" defaultOpen={false}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-lg font-medium text-white group-data-[hover]:text-white/80">
              Spécificités
            </span>
            <ChevronDownIcon className="size-5 fill-white" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white">
            <ul className='list-disc mx-5 gap-2 flex flex-col'>
              <li>100 % néoprène</li>
              <li>Poids de la housse 13&quot; : 220 g (6.49 oz)</li>
              <li>Poids de la housse 15″ : 250 g (8.8 oz)</li>
              <li>Léger et résistant à l&apos;eau, à la graisse et à la chaleur</li>
              <li>Doublure intérieure en fausse fourrure</li>
              <li>Face avant personnalisable, face arrière noir solide</li>
              <li>Design unique et sur mesure</li>
              <li>Rembourrage</li>
            </ul>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-4">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-lg font-medium text-white group-data-[hover]:text-white/80">
              Délais de livraison
            </span>
            <ChevronDownIcon className="size-5 fill-white" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white">
          <ul className='flex flex-col gap-5'>
            <li>
              Les délais de livraison varient en fonction des périodes de fêtes et des fortes affluences de commandes.
              Néanmoins, les délais restent aux alentours de 2 à 5 jours ouvrés.</li>
            <li>
              À noter également que les estimations de livraison et les frais d&apos;expédition varient en fonction des pays et son calculés
              automatiquement à la prochaine étape.
            </li>
          </ul>
          </DisclosurePanel>
        </Disclosure>

        <Disclosure as="div" className="p-4">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-lg font-medium text-white group-data-[hover]:text-white/80">
              Choisir sa taille
            </span>
            <ChevronDownIcon className="size-5 fill-white" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white">
          <ul className='list-disc mx-5 gap-1 flex flex-col'>
              <li>13 pouces : Longueur : 34.3cm | Largeur:  26.7cm | Hauteur:  1.5cm</li>
              <li>15 pouces : Longueur : 37.3cm | Largeur:  28.5cm | Hauteur:  1.5cm</li>
            </ul>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  )
}