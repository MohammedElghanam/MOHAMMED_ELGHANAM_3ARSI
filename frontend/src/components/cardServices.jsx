import useService from "../hooks/useService"

export default function CardServices() {

    const { services } = useService();

  return (
    <>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <div key={service.id} className="border rounded p-4">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">{service.name}</h3>
                <span className="text-sm bg-gray-200 px-2 py-1 rounded">{service.price} dh</span>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Type:</strong> {service.type}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Téléphone:</strong> {service.phone}
              </p>
            </div>
          ))}
        </div>
    </>
  )
}
