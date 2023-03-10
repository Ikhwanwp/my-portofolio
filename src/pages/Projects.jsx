import { useState } from "react";

function Tab({ tab, activeTab, setActiveTab }) {
  return (
    <button
      className={`${activeTab === tab.id ? "bg-color-primary " : ""
        } px-4 py-2 text-sm font-medium text-color-secondary focus:outline-none transition-transform duration-200 transform hover:scale-105`}
      onClick={() => setActiveTab(tab.id)}
    >
      {tab.title}
    </button>
  );
}

function Card({ title, description }) {
  return (
    <div className="mb-4 flex space-x-5">
      <div className="w-40 h-40 rounded-lg bg-color-primary"></div>
      <div>
        <h1 className="text-2xl font-medium text-color-secondary mb-2">
          {title}
        </h1>
        <p className="text-color-secondary-dark">{description}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      title: "All",
      cards: [
        {
          title: "Card Title 1-1",
          description: "Card Description 1-1",
        },
        {
          title: "Card Title 1-2",
          description: "Card Description 1-2",
        },
        {
          title: "Card Title 1-3",
          description: "Card Description 1-3",
        },
      ],
    },
    {
      id: 2,
      title: "Web",
      cards: [
        {
          title: "Card Title 2-1",
          description: "Card Description 2-1",
        },
        {
          title: "Card Title 2-2",
          description: "Card Description 2-2",
        },
        {
          title: "Card Title 2-3",
          description: "Card Description 2-3",
        },
      ],
    },
    {
      id: 3,
      title: "Mobile",
      cards: [
        {
          title: "Card Title 3-1",
          description: "Card Description 3-1",
        },
        {
          title: "Card Title 3-2",
          description: "Card Description 3-2",
        },
        {
          title: "Card Title 3-3",
          description: "Card Description 3-3",
        },
      ],
    },
    {
      id: 4,
      title: "Design",
      cards: [
        {
          title: "Card Title 4-1",
          description: "Card Description 3-1",
        },
        {
          title: "Card Title 4-2",
          description: "Card Description 3-2",
        },
        {
          title: "Card Title 4-3",
          description: "Card Description 3-3",
        },
      ],
    },
  ];

  return (
    <div className="container">
      <div className="w-full px-4">
        <div className="max-w-3xl mx-auto ">
          <div className="mb-8">
            <div className="flex  justify-center -mb-px space-x-8">
              {tabs.map((tab) => (
                <Tab
                  key={tab.id}
                  tab={tab}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              ))}
              <div
                className="  absolute bottom-0 left-0"
                style={{
                  width: "calc(100% / 3)",
                  height: "3px",
                  transform: `translateX(calc(${(activeTab - 1) * 100}% + ${(activeTab - 1) * 16
                    }px))`,
                  transition: "transform 0.2s",
                }}
              ></div>
            </div>
            {tabs.map(
              (tab) =>
                activeTab === tab.id && (
                  <div key={tab.id} className="mt-8">
                    {tab.cards.map((card, index) => (
                      <Card
                        key={index}
                        title={card.title}
                        description={card.description}
                      />
                    ))}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
