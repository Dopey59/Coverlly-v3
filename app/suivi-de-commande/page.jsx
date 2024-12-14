/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect } from "react";
import 'ldrs/ring'

const TrackOrder = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("ldrs").then(({ zoomies }) => zoomies.register());
    }
  }, []);
  const [orderId, setOrderId] = useState("");
  const [orderStatus, setOrderStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleTrackOrder = async () => {
    setLoading(true);
    setError("");
    setOrderStatus(null);
  
    if (!orderId.trim()) {
      setError("Veuillez entrer un numéro de commande valide.");
      setLoading(false);
      return;
    }
  
    try {
      const response = await fetch(`/api/suivi-de-commande`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId }),
      });
    
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || "Une erreur est survenue.");
        return;
      }
    
      const data = await response.json();
      setOrderStatus(data);
    } catch (err) {
      setError("Une erreur réseau est survenue. Veuillez réessayer plus tard.");
    }
    
  };
  

  return (
    <section>
        <div className="h-screen w-full flex flex-col gap-6 justify-center items-center">
          <div className="flex flex-col gap-3 items-center justify-center ">
            <h1 className="md:text-5xl text-3xl p-2">Suivez votre commande</h1>
            <p className="text-base text-center p-2">Entrez votre numéro de commande pour voir son statut.</p>
          </div>
            <div className="flex gap-4">
              <input
                className="border-black border-2 rounded p-2"
                  type="text"
                  placeholder="Numéro de commande"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  required
              />
              <button className="bg-black transition hover:duration-500 ease-in-out hover:bg-rose-300 text-white rounded p-2" onClick={handleTrackOrder}>
                  Suivre
              </button>
            </div>
            {loading && <p><l-zoomies
              size="80"
              stroke="5"
              bg-opacity="0.1"
              speed="1.4" 
              color="#FFCCE7" 
            ></l-zoomies>
            </p>}
            {error && <p>{error}</p>}
            {orderStatus && (
                <div style={{ marginTop: "1rem" }}>
                <h2>Statut de la commande :</h2>
                <p><strong>ID :</strong> {orderStatus.id}</p>
                <p><strong>Statut :</strong> {orderStatus.status}</p>
                <p><strong>Transporteur :</strong> {orderStatus.carrier}</p>
                <p><strong>Numéro de suivi :</strong> {orderStatus.tracking_number}</p>
                <a href={orderStatus.tracking_url} target="_blank" rel="noopener noreferrer">
                    Lien de suivi
                </a>
        </div>
        )}
    </div>
    </section>
  );
};

export default TrackOrder;
