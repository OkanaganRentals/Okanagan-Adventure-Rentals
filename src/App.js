import React, { useState } from "react";
import {
  Phone,
  Calendar,
  Clock,
  Users,
  Anchor,
  Star,
  MapPin,
  Mail,
  Camera,
  Play,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import "./App.css";

const App = () => {
  const [selectedBoat, setSelectedBoat] = useState(null);
  const [galleryBoat, setGalleryBoat] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [bookingForm, setBookingForm] = useState({
    date: "",
    time: "",
    duration: "",
    guests: "",
    name: "",
    email: "",
    phone: "",
  });

  const boats = [
    {
      id: 1,
      name: "Centurion Fi23",
      type: "Wake Boat",
      capacity: 14,
      price: 350,
      image: "/centaur/Centaur-6.JPG",
      features: [
        "Wake Tower",
        "Premium Sound System",
        "Luxury Interior",
        "Wake Boarding Equipment",
      ],
      gallery: [
        {
          type: "image",
          url: "/centaur/Centaur-1.JPG",
          caption: "Centurion Fi23 - Bow & Tower View",
        },
        {
          type: "image",
          url: "/centaur/Centaur-2.JPG",
          caption: "Centurion Fi23 - Port Side Profile",
        },
        {
          type: "image",
          url: "/centaur/Centaur-3.JPG",
          caption: "Centurion Fi23 - Starboard Bow",
        },
        {
          type: "image",
          url: "/centaur/Centaur-4.JPG",
          caption: "Centurion Fi23 - Aerial Perspective",
        },
        {
          type: "image",
          url: "/centaur/Centaur-5.JPG",
          caption: "Centurion Fi23 - Cockpit & Seating",
        },
        {
          type: "image",
          url: "/centaur/Centaur-6.JPG",
          caption: "Centurion Fi23 - Stern & Swim Platform",
        },
        {
          type: "image",
          url: "/centaur/centaur-7.JPG",
          caption: "Centurion Fi23 - Full Boat Profile",
        },
        {
          type: "video",
          url: "/centaur/centaur-7.mov",
          caption: "Centurion Fi23 - Video Tour",
        },
        {
          type: "video",
          url: "/centaur/centaur-fun.MOV",
          caption: "Centurion Fi23 - Fun on the Water",
        },
        {
          type: "video",
          url: "/centaur/centaur-wake.MOV",
          caption: "Centurion Fi23 - Wake Action",
        },
      ],
    },
    {
      id: 2,
      name: "Seadoos",
      type: "Jet Ski",
      capacity: 2,
      price: 125,
      image: "/seadoo/seadoo.JPG",
      features: [
        "High Performance Engine",
        "Built-in Cooler",
        "GPS Navigation",
        "Safety Equipment",
        "Water Sports Ready",
      ],
      gallery: [
        {
          type: "image",
          url: "/seadoo/seadoo.JPG",
          caption: "Seadoo Jet Ski",
        },
        {
          type: "image",
          url: "/seadoo/seadoo-action.JPG",
          caption: "Seadoo Jet Ski - Action Shot",
        },
        {
          type: "image",
          url: "/seadoo/seadoo-action2.JPG",
          caption: "Seadoo Jet Ski - Action Shot 2",
        },
        {
          type: "video",
          url: "/seadoo/seadoo-fun.MOV",
          caption: "Seadoo Jet Ski - Fun on the Water",
        },
        {
          type: "video",
          url: "/seadoo/seadoo-fun2.MOV",
          caption: "Seadoo Jet Ski - More Fun Action",
        },
      ],
    },
    {
      id: 3,
      name: "Seadoo Pontoon Boat",
      type: "Pontoon Boat",
      capacity: 10,
      price: 150,
      image: "/pontoon/pontoon-drone-back.JPEG",
      features: [
        "Spacious Deck",
        "Comfortable Seating",
        "Safety Equipment",
        "Perfect for Groups",
      ],
      gallery: [
        {
          type: "image",
          url: "/pontoon/pontoon-side.JPEG",
          caption: "Seadoo Pontoon Boat - Side View",
        },
        {
          type: "image",
          url: "/pontoon/pontoon-back.JPEG",
          caption: "Seadoo Pontoon Boat - Back View",
        },
        {
          type: "image",
          url: "/pontoon/pontoon-done-side2.JPEG",
          caption: "Seadoo Pontoon Boat - Side View 2",
        },
        {
          type: "image",
          url: "/pontoon/pontoon-drone-side.JPEG",
          caption: "Seadoo Pontoon Boat - Drone Side View",
        },
        {
          type: "image",
          url: "/pontoon/pontoon-drone-back.JPEG",
          caption: "Seadoo Pontoon Boat - Drone Back View",
        },
        {
          type: "image",
          url: "/pontoon/pontoon-deck.JPEG",
          caption: "Seadoo Pontoon Boat - Deck View",
        },
      ],
    },
    {
      id: 4,
      name: "Coastal Runner",
      type: "Pontoon Boat",
      capacity: 10,
      price: 280,
      image:
        "https://images.unsplash.com/photo-1566024287286-457247b70310?w=400&h=250&fit=crop",
      features: [
        "Spacious Deck",
        "Comfortable Seating",
        "Safety Equipment",
        "Perfect for Groups",
        "Stable Platform",
      ],
      gallery: [
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1566024287286-457247b70310?w=800&h=600&fit=crop",
          caption: "Speedboat in Action",
        },
        {
          type: "video",
          url: "https://player.vimeo.com/video/325261728",
          caption: "High Speed Demo",
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
          caption: "Cockpit View",
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1562281406-e2ac26f550ce?w=800&h=600&fit=crop",
          caption: "Control Dashboard",
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1572484464577-96d39bf8c6f5?w=800&h=600&fit=crop",
          caption: "Seating Area",
        },
      ],
    },
  ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking request submitted for ${selectedBoat.name}! We'll contact you shortly to confirm.`
    );
    setSelectedBoat(null);
    setBookingForm({
      date: "",
      time: "",
      duration: "",
      guests: "",
      name: "",
      email: "",
      phone: "",
    });
  };

  const handleInputChange = (e) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleCallNow = () => {
    window.location.href = "tel:+17808868251";
  };

  const calculateBoatPrice = (boat, duration) => {
    if (boat.name === "Centurion Fi23") {
      if (duration <= 3) {
        return duration * 350;
      } else {
        return duration * 250;
      }
    }
    if (boat.name === "Seadoo Pontoon Boat") {
      if (duration === 8) {
        return 1250;
      } else {
        return duration * 150;
      }
    }
    return boat.price * duration;
  };

  const getBoatPricingDisplay = (boat) => {
    if (boat.name === "Centurion Fi23") {
      return (
        <div className="text-right">
          <div className="text-lg font-bold text-blue-600">
            $350/hr (up to 3hrs)
          </div>
          <div className="text-sm text-blue-600">$250/hr (4+ hours)</div>
          <div className="text-xs text-gray-500 mt-1">per hour + gas</div>
        </div>
      );
    }
    if (boat.name === "Seadoo Pontoon Boat") {
      return (
        <div className="text-right">
          <div className="text-lg font-bold text-blue-600">$150/hr</div>
          <div className="text-sm text-blue-600">$1250 (8 hours)</div>
          <div className="text-xs text-gray-500 mt-1">per hour + gas</div>
        </div>
      );
    }
    return (
      <div className="text-right">
        <div className="text-2xl font-bold text-blue-600">${boat.price}</div>
        <div className="text-sm text-gray-500">per hour + gas</div>
      </div>
    );
  };

  const handleEmailInquiry = () => {
    window.location.href = "mailto:rentals@Okanagan Adventure Rentals.com";
  };

  const openGallery = (boat, startIndex = 0) => {
    setGalleryBoat(boat);
    setCurrentMediaIndex(startIndex);
  };

  const closeGallery = () => {
    setGalleryBoat(null);
    setCurrentMediaIndex(0);
  };

  const nextMedia = () => {
    if (galleryBoat && currentMediaIndex < galleryBoat.gallery.length - 1) {
      setCurrentMediaIndex(currentMediaIndex + 1);
    }
  };

  const prevMedia = () => {
    if (currentMediaIndex > 0) {
      setCurrentMediaIndex(currentMediaIndex - 1);
    }
  };

  const goToMedia = (index) => {
    setCurrentMediaIndex(index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Anchor className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Okanagan Adventure Rentals</h1>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span className="text-lg font-semibold">(780) 886-8251</span>
            </div>
            <button
              onClick={handleCallNow}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
            >
              Call Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-500 to-cyan-400">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
          <div className="text-white">
            <h2 className="text-5xl font-bold mb-4">Rent Premium Boats</h2>
            <p className="text-xl mb-6">
              Experience the ocean like never before with our luxury fleet
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() =>
                  document
                    .getElementById("boats")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Fleet
              </button>
              <button
                onClick={handleCallNow}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Phone className="inline w-5 h-5 mr-2" />
                Quick Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Okanagan Adventure Rentals?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Premium Fleet</h4>
              <p className="text-gray-600">
                Modern, well-maintained boats with all safety equipment included
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Flexible Booking</h4>
              <p className="text-gray-600">
                Book by the hour, half-day, or full day with instant
                confirmation
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Prime Location</h4>
              <p className="text-gray-600">
                Located at the heart of the marina with easy access to open
                waters
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Cancellation Policy
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Flexible Cancellation
              </h4>
              <p className="text-gray-600">
                Cancel up to 48 hours before your scheduled rental time with our
                Trip Cancellation policy
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Anchor className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Rain or Shine</h4>
              <p className="text-gray-600">
                All rentals run rain or shine - we provide rain gear and ensure
                your safety in all weather conditions
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <div className="bg-gray-50 p-6 rounded-xl inline-block">
              <p className="text-gray-700 font-medium">
                <span className="text-green-600 font-semibold">✓</span> Free
                cancellation up to 48 hours before
              </p>
              <p className="text-gray-700 font-medium">
                <span className="text-blue-600 font-semibold">✓</span>{" "}
                Weather-proof rentals with safety equipment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Boat Fleet */}
      <section id="boats" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Fleet
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {boats.map((boat) => (
              <div
                key={boat.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <img
                  src={boat.image}
                  alt={boat.name}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">
                        {boat.name}
                      </h4>
                      <p className="text-gray-600">{boat.type}</p>
                    </div>
                    {getBoatPricingDisplay(boat)}
                  </div>

                  <div className="mb-3 text-right">
                    <div className="text-sm text-gray-600">
                      Damage Deposit:{" "}
                      <span className="font-semibold text-red-600">
                        {boat.name === "Centurion Fi23"
                          ? "$2,500"
                          : boat.name === "Seadoos"
                          ? "$500"
                          : boat.name === "Seadoo Pontoon Boat"
                          ? "$750"
                          : "$1,000"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center mb-4 text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span>Up to {boat.capacity} guests</span>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-semibold mb-2 text-gray-700">
                      Features:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {boat.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => setSelectedBoat(boat)}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      <Calendar className="inline w-4 h-4 mr-2" />
                      Book Now
                    </button>
                    <button
                      onClick={() => openGallery(boat)}
                      className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                    >
                      <Camera className="inline w-4 h-4 mr-2" />
                      Gallery
                    </button>
                    <button
                      onClick={handleCallNow}
                      className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
                    >
                      <Phone className="inline w-4 h-4 mr-2" />
                      Call
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Get In Touch
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-6 text-gray-800">
                Contact Information
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-semibold">
                      <a
                        href="tel:+17808868251"
                        className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                      >
                        (780) 886-8251
                      </a>
                    </div>
                    <div className="text-gray-600 text-sm">Available 24/7</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-semibold">
                      <a
                        href="mailto:Avery-John@icloud.com"
                        className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                      >
                        Avery_john@icloud.com
                      </a>
                    </div>
                    <div className="text-gray-600 text-sm">
                      Quick email response
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-semibold">
                      1354 Water St, Kelowna, BC
                    </div>
                    <div className="text-gray-600 text-sm">
                      Easy parking available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-6 text-gray-800">
                Quick Inquiry
              </h4>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <textarea
                  placeholder="Tell us about your rental needs..."
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
                <button
                  onClick={handleEmailInquiry}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Send Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Anchor className="w-6 h-6" />
            <span className="text-xl font-bold">
              Okanagan Adventure Rentals
            </span>
          </div>
          <p className="text-blue-200 mb-2">
            Premium Aquatic Rentals for unforgettable experiences
          </p>
          <p className="text-blue-300">
            © 2025 Okanagan Adventure Rentals. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Gallery Modal */}
      {galleryBoat && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
          <div className="relative max-w-6xl w-full h-full flex flex-col">
            {/* Gallery Header */}
            <div className="flex justify-between items-center text-white mb-4">
              <div>
                <h3 className="text-2xl font-bold">
                  {galleryBoat.name} - Gallery
                </h3>
                <p className="text-gray-300">
                  {currentMediaIndex + 1} of {galleryBoat.gallery.length}
                </p>
              </div>
              <button
                onClick={closeGallery}
                className="text-white hover:text-gray-300 text-3xl"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Main Media Display */}
            <div className="flex-1 flex items-center justify-center relative px-4">
              {galleryBoat.gallery[currentMediaIndex].type === "image" ? (
                <div className="w-full max-w-4xl max-h-[70vh] flex items-center justify-center">
                  <img
                    src={galleryBoat.gallery[currentMediaIndex].url}
                    alt={galleryBoat.gallery[currentMediaIndex].caption}
                    className="w-full h-full max-w-full max-h-full object-contain rounded-lg shadow-lg"
                  />
                </div>
              ) : (
                <div className="relative w-full max-w-4xl aspect-video">
                  <video
                    src={galleryBoat.gallery[currentMediaIndex].url}
                    className="w-full h-full rounded-lg shadow-lg"
                    controls
                    autoPlay
                    muted
                    loop
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded flex items-center">
                    <Play className="w-4 h-4 mr-1" />
                    Video
                  </div>
                </div>
              )}

              {/* Navigation Arrows */}
              {currentMediaIndex > 0 && (
                <button
                  onClick={prevMedia}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {currentMediaIndex < galleryBoat.gallery.length - 1 && (
                <button
                  onClick={nextMedia}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Caption */}
            <div className="text-center text-white mt-4">
              <p className="text-lg font-semibold">
                {galleryBoat.gallery[currentMediaIndex].caption}
              </p>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center mt-6 px-4">
              <div className="flex space-x-2 overflow-x-auto pb-2 max-w-full">
                {galleryBoat.gallery.map((media, index) => (
                  <button
                    key={index}
                    onClick={() => goToMedia(index)}
                    className={`relative flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentMediaIndex
                        ? "border-blue-400"
                        : "border-gray-600 hover:border-gray-400"
                    }`}
                  >
                    {media.type === "image" ? (
                      <img
                        src={media.url}
                        alt={media.caption}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                        <Play className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                      </div>
                    )}
                    {index === currentMediaIndex && (
                      <div className="absolute inset-0 bg-blue-400 bg-opacity-20"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {selectedBoat && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  Book {selectedBoat.name}
                </h3>
                <button
                  onClick={() => setSelectedBoat(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="mb-6">
                <img
                  src={selectedBoat.image}
                  alt={selectedBoat.name}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">{selectedBoat.type}</div>
                    <div className="text-gray-600 flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      Up to {selectedBoat.capacity} guests
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-blue-600">
                      ${selectedBoat.price}/hr
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="date"
                    value={bookingForm.date}
                    onChange={handleInputChange}
                    required
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <select
                    name="time"
                    value={bookingForm.time}
                    onChange={handleInputChange}
                    required
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Time</option>
                    <option value="06:00">6:00 AM</option>
                    <option value="06:30">6:30 AM</option>
                    <option value="07:00">7:00 AM</option>
                    <option value="07:30">7:30 AM</option>
                    <option value="08:00">8:00 AM</option>
                    <option value="08:30">8:30 AM</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="09:30">9:30 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="10:30">10:30 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="14:30">2:30 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="15:30">3:30 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="16:30">4:30 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <select
                    name="duration"
                    value={bookingForm.duration}
                    onChange={handleInputChange}
                    required
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Duration</option>
                    {selectedBoat.name === "Centurion Fi23" ? (
                      <>
                        <option value="3">3 hours (minimum)</option>
                        <option value="4">4 hours</option>
                        <option value="5">5 hours</option>
                        <option value="6">6 hours</option>
                        <option value="7">7 hours</option>
                        <option value="8">8 hours</option>
                      </>
                    ) : selectedBoat.name === "Seadoo Pontoon Boat" ? (
                      <>
                        <option value="2">2 hours</option>
                        <option value="3">3 hours</option>
                        <option value="4">4 hours</option>
                        <option value="5">5 hours</option>
                        <option value="6">6 hours</option>
                        <option value="7">7 hours</option>
                        <option value="8">8 hours (Full Day - $1250)</option>
                      </>
                    ) : (
                      <>
                        <option value="2">2 hours</option>
                        <option value="4">4 hours</option>
                        <option value="8">Full day</option>
                      </>
                    )}
                  </select>
                  <input
                    type="number"
                    name="guests"
                    placeholder="# of guests"
                    value={bookingForm.guests}
                    onChange={handleInputChange}
                    max={selectedBoat.capacity}
                    required
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={bookingForm.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={bookingForm.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={bookingForm.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />

                {bookingForm.duration && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total Cost:</span>
                      <span className="text-xl font-bold text-blue-600">
                        $
                        {calculateBoatPrice(
                          selectedBoat,
                          parseInt(bookingForm.duration)
                        )}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {selectedBoat.name === "Centurion Fi23" ? (
                        <>
                          {bookingForm.duration} hours -{" "}
                          {parseInt(bookingForm.duration) <= 3
                            ? `$${350}/hr`
                            : `$${250}/hr`}
                          {" + gas"}
                        </>
                      ) : selectedBoat.name === "Seadoo Pontoon Boat" ? (
                        <>
                          {bookingForm.duration} hours -{" "}
                          {parseInt(bookingForm.duration) === 8
                            ? `Full Day Rate - $1250`
                            : `$${150}/hr`}
                          {" + gas"}
                        </>
                      ) : (
                        `${bookingForm.duration} hours × $${selectedBoat.price}/hour + gas`
                      )}
                    </div>
                  </div>
                )}

                <button
                  onClick={handleBookingSubmit}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Submit Booking Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
