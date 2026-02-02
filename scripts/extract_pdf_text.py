from pathlib import Path
import PyPDF2

pdf_path = Path(r"C:/dev/etti/PageSpeed Insights.pdf")
reader = PyPDF2.PdfReader(str(pdf_path))
texts = []
for i, page in enumerate(reader.pages):
    text = page.extract_text() or ""
    texts.append(f"\n--- page {i+1} ---\n{text}")

print("\n".join(texts))
