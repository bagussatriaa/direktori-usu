"use client";

import { useState } from "react";

import Dropdown from "../DropdownKategori";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import { toast } from "sonner";

import { kategori } from "@/data/kategori";

export default function SearchSection() {
  const [selectedKategori, setSelectedKategori] = useState("");
  const [keyword, setKeyword] = useState("");

  const [kategoriError, setKategoriError] = useState("");
  const [keywordError, setKeywordError] = useState("");

  const handleSearch = () => {
    let isValid = true;

    setKategoriError("");
    setKeywordError("");

    if (!selectedKategori && !keyword.trim()) {
      setKategoriError("Wajib diisi");
      setKeywordError("Wajib diisi");

      toast.error("Kategori dan kata kunci wajib diisi.");
      return;
    }

    if (!selectedKategori) {
      setKategoriError("Wajib diisi");

      toast.error("Silakan pilih kategori.");
      return;
    }

    if (!keyword.trim()) {
      setKeywordError("Wajib diisi");

      toast.error("Silakan masukkan kata kunci.");
      return;
    }

    if (!isValid) return;

    console.log({
      kategori: selectedKategori,
      keyword: keyword.trim(),
    });

    /*
      Nanti ketika backend sudah siap,
      cukup ganti console.log menjadi:

      router.push(
        `/directory/${selectedKategori}?q=${keyword.trim()}`
      );
    */
  };

  return (
    <section>
      <div className="flex items-center gap-2">
        <div className="w-56">
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

          
        </div>

        <div className="flex-1">
          <SearchInput
            value={keyword}
            onChange={(value) => {
              setKeyword(value);
              setKeywordError("");
            }}
            onSearch={handleSearch}
            error={keywordError}
          />

          
        </div>

        <div className="w-24">
          <SearchButton
            onClick={handleSearch}
          />
        </div>
      </div>
    </section>
  );
}