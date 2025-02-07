import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Gamepad2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Gamepad2 className="h-8 w-8 text-indigo-500" />
              <span className="text-2xl font-bold text-white">GameVault</span>
            </div>
            <p className="text-gray-400 mb-4">
              Votre destination ultime pour l'équipement gaming premium et les accessoires.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors">Nouveautés</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors">Meilleures Ventes</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors">PC Gaming</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors">Accessoires</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors">Offres Spéciales</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Service Client</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors">Nous Contacter</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors">Livraison</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors">Retours & Échanges</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors">Suivi de Commande</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <MapPin size={20} className="text-indigo-500" />
                <span>123 Rue du Gaming, Bruxelles 1000</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="text-indigo-500" />
                <span>+32 2 123 45 67</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} className="text-indigo-500" />
                <span>support@gamevault.be</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 GameVault. Tous droits réservés.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-indigo-500 transition-colors">Politique de Confidentialité</a>
              <a href="#" className="text-sm hover:text-indigo-500 transition-colors">Conditions d'Utilisation</a>
              <a href="#" className="text-sm hover:text-indigo-500 transition-colors">Politique des Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}