function Footer() {
  return (
    <footer className="mt-12 text-gray-400 text-xs text-center">
      <div className="mb-2">&copy; 2025 LinkedIn Optimizer. All rights reserved.</div>
      <a
        href="https://ko-fi.com/dachiarevadze"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-slate-400 hover:text-[#29abe0] font-medium py-1 px-2 rounded transition duration-200 text-xs"
      >
        <img src="/ko-fi-logo.svg" alt="Ko-fi logo" width="16" height="4" className="inline-block align-middle opacity-80" style={{verticalAlign: 'middle'}} />
        Support me on Ko-fi
      </a>
    </footer>
  );
}

export default Footer;
