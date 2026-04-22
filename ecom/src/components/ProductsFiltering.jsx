export default function ProductsFiltering({
  categoryFilterOptions,
  activeCategoryFilterOptionId,
  onChangeCategory,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "20px",
        paddingRight: "20px",
      }}
    >
      <select
        style={{
          padding: "8px 12px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
        value={activeCategoryFilterOptionId}
        onChange={(e) => onChangeCategory(e.target.value)}
      >
        {categoryFilterOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name.charAt(0).toUpperCase() + option.name.slice(1)}
          </option>
        ))}
      </select>
    </div>
  )
}
