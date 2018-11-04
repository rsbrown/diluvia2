# A treetop grammar for JSON
# Autogenerated from a Treetop grammar. Edits may be lost.


module JSONGrammar
  include Treetop::Runtime

  def root
    @root ||= :json
  end

  def _nt_json
    start_index = index
    if node_cache[:json].has_key?(index)
      cached = node_cache[:json][index]
      if cached
        node_cache[:json][index] = cached = SyntaxNode.new(input, index...(index + 1)) if cached == true
        @index = cached.interval.end
      end
      return cached
    end

    i0 = index
    r1 = _nt_array
    if r1
      r1 = SyntaxNode.new(input, (index-1)...index) if r1 == true
      r0 = r1
    else
      r2 = _nt_object
      if r2
        r2 = SyntaxNode.new(input, (index-1)...index) if r2 == true
        r0 = r2
      else
        @index = i0
        r0 = nil
      end
    end

    node_cache[:json][start_index] = r0

    r0
  end

end

class JSONGrammarParser < Treetop::Runtime::CompiledParser
  include JSONGrammar
end

