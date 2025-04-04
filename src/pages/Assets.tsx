import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";
import Container from "../components/Container/Container";
import { motion } from "motion/react";
import { soldAssets, currentAssets, ongoing } from "../services/assets";
import { useNavigate, useSearchParams } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Nav from "../components/Navbar/Nav";

const categories = ["Current", "In Progress", "Sold"];

const Assets = () => {
  const [modal, setModal] = useState<string | null>(null);

  const [activeCategory, setActiveCategory] = useState<string>("Current");

  const [title] = useState<string>("Our Assets");
  useDocumentTitle(title);

  const navigate = useNavigate();

  const handleAssetClicked = (name: string) => {
    setModal(name);
    document.body.style.overflow = "hidden";
  };

  const [searchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "auto";

    const queryParam = searchParams.get("asset");

    if (queryParam === "our-assets") {
      setActiveCategory("Current");
    } else if (queryParam === "sold") {
      setActiveCategory("Sold");
    } else if (queryParam === "in-progress") {
      setActiveCategory("In Progress");
    } else {
      setActiveCategory("Current");
    }
  }, [searchParams]);

  const [currentPage, setCurrentPage] = useState(1);

  // Filter assets based on active category
  const assets =
    activeCategory === "Sold"
      ? soldAssets
      : activeCategory === "Current"
      ? currentAssets
      : activeCategory === "In Progress"
      ? ongoing
      : [];

  const filteredAssets = assets.filter(
    (asset) => asset.category === activeCategory
  );

  const ITEMS_PER_PAGE = 9;

  // Calculate total pages
  const totalPages = Math.ceil(filteredAssets.length / ITEMS_PER_PAGE);

  // Get items for the current page
  const viewingAssets = filteredAssets.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);

    const parameter =
      category === "Sold"
        ? "sold"
        : category === "Current"
        ? "current"
        : "in-progress";

    // Create a new search params object with only the selected category
    const params = new URLSearchParams();
    params.set("asset", parameter); // Add new category parameter

    navigate(`?${params.toString()}`, { replace: true }); // Update the URL
  };

  return (
    <>
      {/* Modal */}
      {modal && (
        <Modal
          category={activeCategory}
          name={modal}
          onClose={() => {
            setModal(null);
            document.body.style.overflow = "auto";
          }}
        />
      )}

      <Nav bg />

      <div className={`lg:pt-16 pt-24`}>
        <Container>
          <div className="lg:mb-8 mb-3">
            <h1 className="lg:text-3xl text-2xl">Our Properties</h1>
            <p className="mt-3 lg:w-[60%]">
              Explore our carefully selected real estate assets, chosen for
              their potential in both short- and long-term growth, stability,
              and enduring value.
            </p>
            <p className="text-gray-500 mb-5 mt-10">Categories</p>
            <motion.div
              layout
              className="lg:flex grid grid-cols-2 gap-y-3 lg:gap-x-12 gap-x-4"
            >
              {categories.map((c) => (
                <motion.button
                  layout
                  key={c}
                  onClick={() => handleCategoryClick(c)}
                  className={`font-normal ${
                    activeCategory === c
                      ? "bg-secondary text-white lg:px-10 shadow-[2px_2px_3px_0px_black] text-sm py-3"
                      : "text-gray-600 border border-btn lg:py-2 py-3 lg:px-10"
                  } `}
                >
                  {c === "Current"
                    ? "Long Term Properties"
                    : c === "In Progress"
                    ? "Current Projects"
                    : "Completed Properties"}
                </motion.button>
              ))}
            </motion.div>

            <div className="lg:my-12 my-8">
              {/* Asset Grid */}
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 lg:gap-y-7 gap-y-5 mb-6">
                {viewingAssets.length > 0 ? (
                  viewingAssets.map((asset) => (
                    <div
                      key={asset.id}
                      onClick={() => handleAssetClicked(asset.name)}
                      className="rounded-2xl p-2 border border-btn overflow-hidden hover:scale-[0.99] group transition-all duration-300 shadow"
                    >
                      <img
                        src={asset.img}
                        alt={"asset" + asset.id}
                        className="lg:h-72 md:h-72 h-60 w-full rounded-xl object-cover object-bottom group-hover:scale-[1.03] transition-transform duration-700"
                      />
                      <div className="px-4 py-5">
                        <p className="font-semibold text-xl mb-2">
                          {asset.name}
                        </p>
                        <div className="flex justify-between">
                          <p className="text-gray-500 text-sm font-semibold">
                            <span className="bi-geo-alt-fill text-secondary me-2"></span>
                            {asset.location}
                          </p>
                          {/* {asset.purchased && (
                            <p className="text-gray-500 text-sm font-semibold">
                              <span className="bi-calendar-check-fill me-2 text-secondary"></span>
                              Purchased {asset.purchased}
                            </p>
                          )} */}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="lg:col-span-2 p-2 w-full text-center bg-btn font-semibold text-white mb-60">
                    No assets available right now. Check back later for updates!
                  </p>
                )}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 border rounded ${
                      currentPage === 1
                        ? "opacity-50 cursor-not-allowed bg-gray-600"
                        : "bg-secondary text-white"
                    } bi-chevron-left`}
                  ></button>

                  <span className="text-sm font-semibold text-gray-600">
                    {currentPage} of {totalPages}
                  </span>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 border rounded ${
                      currentPage === totalPages
                        ? "opacity-50 cursor-not-allowed"
                        : "bg-secondary text-white"
                    } bi-chevron-right`}
                  ></button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Assets;
