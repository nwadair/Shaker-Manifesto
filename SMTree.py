from suffix_trees import STree


class FuzzyTree(STree.STree):
    def __init__(self, input=''):
        STree.STree.__init__(self, input)

    def _find_fuzzy(self, y, node,  errors=1):
        # print("---------------------------")
        # print(node)
        # print("y {}".format(y))
        # print("errors {}".format(errors))
        edge = self._edgeLabel(node, node.parent)
        # print("edge {}".format(edge))
        # print()
        if edge.startswith(y):
            # print("return {}".format(node.idx))
            return {n.idx for n in node._get_leaves()}
        # print("shorten")
        i = 0
        while (i < len(edge) and edge[i] == y[0]):
            # print("y:{}".format(y))
            y = y[1:]
            i += 1
        z = y
        # print("short y {}".format(y))

        if not node.transition_links.keys() and errors > 0:
            return {n.idx for n in node._get_leaves()}

        r = set()
        if errors > 0:
            for k, v in node.transition_links.items():
                # print("k " + k)
                if k == y[0]:
                    # print("eql case")
                    r.update(self._find_fuzzy(y, v, errors))
                else:
                    # print("error case:" + y[1:])
                    r.update(self._find_fuzzy(k + y[1:], v, errors - 1))
            # print("return {}".format(list(r)))
            return r
        node = node._get_transition_link(y[0])
        if not node:
            # print("return {-1}")
            return {-1}
        return self._find_fuzzy(y, node, errors)

    def find(self, y, fuzzy=True):
        r = set()
        if not fuzzy:
            r = self._find_fuzzy(y, self.root, errors=0)
            return STree.STree.find(self, y)
        r = self._find_fuzzy(y, self.root)
        r.discard(-1)
        return r


if __name__ == "__main__":
    f = FuzzyTree("aabbccacc")
    print("-->>>{}".format(list(f.find("abc"))))