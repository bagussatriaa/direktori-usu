"use client";

import { useState } from "react";
import Dropdown from "./Dropdown";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

import { kategori } from "@/data/kategori";
import { fakultas } from "@/data/fakultas";

export default function SearchSection() {

  const [selectedKategori, setSelectedKategori] = useState("");
  const [selectedFakultas, setSelectedFakultas] = useState("");
  const [keyword, setKeyword] = useState("");
  const [kategoriError, setKategoriError] = useState("");
  const [keywordError, setKeywordError] = useState("");


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

  console.log({
    kategori: selectedKategori,
    fakultas: selectedFakultas,
    keyword,
  });
};

  return (
    <section className="mt-10">
      <div className="flex items-start gap-4">
        <div>
          <Dropdown
            placeholder="Kategori"
            options={kategori}
            value={selectedKategori}
            onSelect={setSelectedKategori}
            error={kategoriError}
          />

          {kategoriError && (
            <p className="mt-1 text-xs text-red-500">
              {kategoriError}
            </p>
          )}

        </div>

        <div>
          <Dropdown
            placeholder="Fakultas/Unit"
            options={fakultas}
            value={selectedFakultas}
            onSelect={setSelectedFakultas}
          />
        </div>

        <div className="flex flex-col">
          <SearchInput 
            value={keyword}
            onChange={setKeyword}
            onSearch={handleSearch}
            error={keywordError}
          />

          {keywordError && (
            <p className="mt-1 text-xs text-red-500">
              {keywordError}
            </p>
          )}
        </div>

        <div>
          <SearchButton
            onClick={handleSearch}
          />
        </div>

        
       
      </div>
    </section>
  );
}