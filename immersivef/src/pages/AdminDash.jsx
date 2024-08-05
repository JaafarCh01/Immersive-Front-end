import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faChalkboardTeacher, faBook, faChartLine } from "@fortawesome/free-solid-svg-icons";

const AdminDash = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Tableau de bord - Enseignant</h1>

      {/* Section statistique rapide */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-5 flex items-center">
          <FontAwesomeIcon icon={faUserGraduate} className="text-4xl text-blue-500 mr-5" />
          <div>
            <p className="text-gray-500">Total des étudiants</p>
            <h2 className="text-2xl font-bold">120</h2>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5 flex items-center">
          <FontAwesomeIcon icon={faChalkboardTeacher} className="text-4xl text-green-500 mr-5" />
          <div>
            <p className="text-gray-500">Cours assignés</p>
            <h2 className="text-2xl font-bold">45</h2>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5 flex items-center">
          <FontAwesomeIcon icon={faBook} className="text-4xl text-yellow-500 mr-5" />
          <div>
            <p className="text-gray-500">Tests effectués</p>
            <h2 className="text-2xl font-bold">300</h2>
          </div>
        </div>
      </div>

      {/* Section progression des étudiants */}
      <div className="mt-10 bg-white shadow-lg rounded-lg p-5">
  <h2 className="text-xl font-bold mb-4">Progression des étudiants</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full table-auto">
      <thead className="bg-gray-200">
        <tr>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Nom de l'étudiant</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Cours en cours</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Progression</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Résultat du dernier test</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Jaafar</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Architecture des PC</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">75%</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">85%</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Ali</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Moteurs de voitures</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">50%</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">70%</td>
        </tr>
        {/* Autres étudiants */}
      </tbody>
    </table>
  </div>
</div>


      {/* Section affectation des cours */}
      <div className="mt-10 bg-white shadow-lg rounded-lg p-5">
        <h2 className="text-xl font-bold mb-4">Affecter des cours aux étudiants</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Sélectionner un étudiant</label>
              <select className="w-full px-4 py-2 border rounded-lg">
                <option value="sarah">Jaafar</option>
                <option value="john">Ali</option>
                {/* Autres étudiants */}
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Sélectionner un cours</label>
              <select className="w-full px-4 py-2 border rounded-lg">
                <option value="pc">Architecture des PC</option>
                <option value="car">Moteurs de voitures</option>
                {/* Autres cours */}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
          >
            Assigner le cours
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDash;
