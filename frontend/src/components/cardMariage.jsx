import React from 'react'
import useMariage from '../hooks/useMariage'

export default function CardMariage() {

    const { mariages } = useMariage();

  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mariages.map((mariage) => (
            <div
              key={mariage.id}
              className="p-4 bg-purple-50 border border-purple-200 rounded shadow-sm"
            >
              <h3 className="font-semibold text-purple-800 mb-3">
                {mariage.bride_name} &amp; {mariage.groom_name}
              </h3>
              <div className="text-sm space-y-1">
                <p>
                  <strong>Date:</strong> {mariage.wedding_date}
                </p>
                <p>
                  <strong>Lieu:</strong> {mariage.location}, {mariage.city}
                </p>
                <p>
                  <strong>Téléphone:</strong> {mariage.phone}
                </p>
                <p>
                  <strong>Invités:</strong> {mariage.guests_number}
                </p>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}
