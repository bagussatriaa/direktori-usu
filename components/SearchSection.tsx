"use client";

import { useState } from "react";
import Dropdown from "./Dropdown";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

import { kategori } from "@/data/kategori";
import { fakultas } from "@/data/fakultas";

import ResultCard from "./ResultCard";
import { dummyDirectory } from "@/data/dummyDirectory";

export default function SearchSection() {

  const [selectedKategori, setSelectedKategori] = useState("");
  const [selectedFakultas, setSelectedFakultas] = useState("");
  const [keyword, setKeyword] = useState("");
  const [kategoriError, setKategoriError] = useState("");
  const [keywordError, setKeywordError] = useState("");
  const [results, setResults] = useState<DirectoryItem[]>([]);
  const [hasSearched, setHasSearched] = useState(false);


  const handleSearch = () => {

  let isValid = true;

  setKategoriError("");
  setKeywordError("");

  if (!selectedKategori) {
    setKategoriError("Wajib diisi");
    isValid = false;
  }

  if (!keyword.trim()) {
    setKeywordError(
      "Wajib diisi"
    );
    isValid = false;
  }

  if (!isValid) return;

  const filteredData = dummyDirectory.filter(
    (item) => {

      const matchKategori =
        item.kategori === selectedKategori;

      const matchFakultas =
        !selectedFakultas ||
        item.fakultas === selectedFakultas;

      const matchKeyword =
        item.nama
          .toLowerCase()
          .includes(
            keyword.trim().toLowerCase()
          );

      return (
        matchKategori &&
        matchFakultas &&
        matchKeyword
      );
    }
  );

  setResults(filteredData);
  setHasSearched(true);
  console.log(filteredData);

  console.log({
    kategori: selectedKategori,
    fakultas: selectedFakultas,
    keyword,
  });
};

 return (
  <section className="mt-10">

    <div
      className="
        bg-[#192123]
        p-4
        rounded-[40px]
        shadow-md
        relative w-250
      "
    >

      <div
        className="
          grid
          grid-cols-12
          gap-4
          items-start
        "
      >

        <div className="col-span-3">
          <Dropdown
            placeholder="Kategori"
            options={kategori}
            value={selectedKategori}
            onSelect={(value) => {
              setSelectedKategori(value);
              setKategoriError("");
            }}
            error={kategoriError}
          />

          {kategoriError && (
            <p className="mt-1 text-xs text-red-500">
              {kategoriError}
            </p>
          )}
        </div>

        <div className="col-span-3">
          <Dropdown
            placeholder="Fakultas/Unit"
            options={fakultas}
            value={selectedFakultas}
            onSelect={setSelectedFakultas}
          />
        </div>

        <div className="col-span-5 flex flex-col">
          <SearchInput
            value={keyword}
            onChange={(value) => {
              setKeyword(value);
              setKeywordError("");
            }}
            onSearch={handleSearch}
            error={keywordError}
          />

          {keywordError && (
            <p className="mt-1 text-xs text-red-500">
              {keywordError}
            </p>
          )}
        </div>

        <div className="col-span-1">
          <SearchButton
            onClick={handleSearch}
          />
        </div>

      </div>

    </div>

    <div className="mt-8">

      {results.length > 0 ? (

        <div className="grid grid-cols-1 gap-4">
          {results.map((item) => (
            <ResultCard
              key={item.id}
              nama={item.nama}
              kategori={item.kategori}
              fakultas={item.fakultas}
            />
          ))}
        </div>

      ) : (

      hasSearched && (
        <div className="mt-8 text-center">

          <p
            className="
              text-lg
              font-medium
              text-gray-700
            "
          >
            Data tidak ditemukan
          </p>

          <p
            className="
              mt-2
              text-sm
              text-gray-500
            "
          >
            Coba gunakan kata kunci lain.
          </p>

        </div>
      )

      )}

    </div>

  </section>
);
}